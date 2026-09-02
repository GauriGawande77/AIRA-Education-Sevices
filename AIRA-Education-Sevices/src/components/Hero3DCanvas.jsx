import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DCanvas({ activeMode = 'robotics', theme = 'luxury-light' }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const currentGroupRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const clockRef = useRef(new THREE.Clock());

  // Mouse & Drag State
  const mouseRef = useRef({ x: 0, y: 0 });
  const rotationRef = useRef({ targetX: 0, targetY: 0, currentX: 0, currentY: 0 });
  const isDraggingRef = useRef(false);
  const prevMousePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = container.clientWidth;
    const height = container.clientHeight || 560;

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 18);
    cameraRef.current = camera;

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Studio Luxury Lighting Setup
    const ambientLight = new THREE.AmbientLight(theme === 'luxury-light' ? 0xfffbeb : 0xffffff, theme === 'luxury-light' ? 1.2 : 0.8);
    scene.add(ambientLight);

    const mainLight = new THREE.PointLight(theme === 'luxury-light' ? 0xf59e0b : 0x00f2fe, 3.5, 60);
    mainLight.position.set(12, 14, 12);
    scene.add(mainLight);

    const secondaryLight = new THREE.PointLight(theme === 'luxury-light' ? 0x2563eb : 0x8b5cf6, 3, 50);
    secondaryLight.position.set(-12, -10, -6);
    scene.add(secondaryLight);

    const goldFillLight = new THREE.PointLight(0xfbbf24, 2, 40);
    goldFillLight.position.set(0, 18, -10);
    scene.add(goldFillLight);

    // 5. Starfield Luxury Dust Particles
    const particleCount = 800;
    const partGeo = new THREE.BufferGeometry();
    const partPos = new Float32Array(particleCount * 3);
    const partColors = new Float32Array(particleCount * 3);

    const col1 = new THREE.Color(theme === 'luxury-light' ? 0xd97706 : 0x00f2fe);
    const col2 = new THREE.Color(theme === 'luxury-light' ? 0x2563eb : 0x8b5cf6);

    for (let i = 0; i < particleCount; i++) {
      partPos[i * 3] = (Math.random() - 0.5) * 60;
      partPos[i * 3 + 1] = (Math.random() - 0.5) * 60;
      partPos[i * 3 + 2] = (Math.random() - 0.5) * 60;

      const mix = col1.clone().lerp(col2, Math.random());
      partColors[i * 3] = mix.r;
      partColors[i * 3 + 1] = mix.g;
      partColors[i * 3 + 2] = mix.b;
    }

    partGeo.setAttribute('position', new THREE.BufferAttribute(partPos, 3));
    partGeo.setAttribute('color', new THREE.BufferAttribute(partColors, 3));

    const partMat = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: theme === 'luxury-light' ? 0.6 : 0.75,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(partGeo, partMat);
    scene.add(particles);

    // 6. Build Initial 3D Model
    buildModel(activeMode, theme);

    // 7. Mouse & Resize Handlers
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 560;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const handleMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleMouseDown = (e) => {
      isDraggingRef.current = true;
      prevMousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    const handleCanvasDrag = (e) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - prevMousePosRef.current.x;
      const deltaY = e.clientY - prevMousePosRef.current.y;

      rotationRef.current.targetY += deltaX * 0.008;
      rotationRef.current.targetX += deltaY * 0.008;

      prevMousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleCanvasDrag);

    // Touch events for mobile
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        prevMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };
    const handleTouchEnd = () => {
      isDraggingRef.current = false;
    };
    const handleTouchMove = (e) => {
      if (!isDraggingRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMousePosRef.current.x;
      const deltaY = e.touches[0].clientY - prevMousePosRef.current.y;

      rotationRef.current.targetY += deltaX * 0.008;
      rotationRef.current.targetX += deltaY * 0.008;

      prevMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchend', handleTouchEnd);
    container.addEventListener('touchmove', handleTouchMove);

    // 8. Animation Frame Loop
    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clockRef.current.getDelta();
      const time = clockRef.current.getElapsedTime();

      particles.rotation.y = time * 0.025;
      particles.rotation.x = time * 0.015;

      const group = currentGroupRef.current;
      if (group) {
        rotationRef.current.currentY += (rotationRef.current.targetY + mouseRef.current.x * 0.4 - rotationRef.current.currentY) * 0.05;
        rotationRef.current.currentX += (rotationRef.current.targetX + mouseRef.current.y * 0.4 - rotationRef.current.currentX) * 0.05;

        group.rotation.y = rotationRef.current.currentY;
        group.rotation.x = rotationRef.current.currentX;

        // Custom Mode Oscillations
        if (activeMode === 'robotics') {
          const r1 = group.getObjectByName('ring1');
          const r2 = group.getObjectByName('ring2');
          const r3 = group.getObjectByName('ring3');
          const core = group.getObjectByName('innerCore');
          const sats = group.getObjectByName('satellites');

          if (r1) { r1.rotation.x += delta * 0.8; r1.rotation.y += delta * 0.6; }
          if (r2) { r2.rotation.y += delta * 1.1; r2.rotation.z += delta * 0.7; }
          if (r3) { r3.rotation.z += delta * 0.5; r3.rotation.x += delta * 0.9; }
          if (core) {
            core.rotation.y -= delta * 0.4;
            const s = 1 + Math.sin(time * 3) * 0.05;
            core.scale.set(s, s, s);
          }
          if (sats) sats.rotation.z += delta * 1.3;
        } else if (activeMode === 'ai') {
          const brain = group.getObjectByName('innerBrain');
          if (brain) {
            brain.rotation.x += delta * 0.6;
            brain.rotation.y += delta * 0.8;
            const s = 1 + Math.sin(time * 4) * 0.07;
            brain.scale.set(s, s, s);
          }
        } else if (activeMode === 'drone') {
          const rotors = group.getObjectByName('rotors');
          const sonar = group.getObjectByName('sonar');
          if (rotors) {
            rotors.children.forEach((p) => { p.rotation.y += delta * 25; });
          }
          if (sonar) {
            const s = 1 + (time % 1.5) * 0.5;
            sonar.scale.set(s, s, s);
          }
          group.position.y = Math.sin(time * 2.5) * 0.3;
        } else if (activeMode === 'quantum') {
          const knot = group.getObjectByName('quantumKnot');
          const cage = group.getObjectByName('quantumCage');
          if (knot) {
            knot.rotation.x += delta * 0.5;
            knot.rotation.y += delta * 0.7;
          }
          if (cage) cage.rotation.y -= delta * 0.3;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      if (container) container.innerHTML = '';
      renderer.dispose();
    };
  }, [theme]);

  // Rebuild 3D Model when activeMode changes
  useEffect(() => {
    buildModel(activeMode, theme);
  }, [activeMode, theme]);

  function buildModel(mode, currentTheme) {
    if (!sceneRef.current) return;
    const scene = sceneRef.current;

    if (currentGroupRef.current) {
      scene.remove(currentGroupRef.current);
    }

    const group = new THREE.Group();
    currentGroupRef.current = group;

    const isLight = currentTheme === 'luxury-light';
    const goldColor = isLight ? 0xd97706 : 0x00f2fe;
    const secondaryColor = isLight ? 0x2563eb : 0x8b5cf6;
    const accentAmber = 0xfbbf24;

    if (mode === 'robotics') {
      // 1. Royal Robotics Gyroscope Core
      const coreGeo = new THREE.IcosahedronGeometry(2.4, 2);
      const coreMat = new THREE.MeshStandardMaterial({
        color: isLight ? 0xffffff : 0x00f2fe,
        roughness: 0.15,
        metalness: 0.85,
        emissive: isLight ? 0xfef3c7 : 0x005577,
        emissiveIntensity: 0.5
      });
      const core = new THREE.Mesh(coreGeo, coreMat);
      core.name = 'innerCore';
      group.add(core);

      const wireGeo = new THREE.IcosahedronGeometry(2.45, 1);
      const wireMat = new THREE.MeshBasicMaterial({
        color: goldColor,
        wireframe: true,
        transparent: true,
        opacity: 0.4
      });
      group.add(new THREE.Mesh(wireGeo, wireMat));

      // Concentric Gold/Sapphire Gyroscope Rings
      const ringMat1 = new THREE.MeshStandardMaterial({ color: goldColor, roughness: 0.1, metalness: 0.95 });
      const ringMat2 = new THREE.MeshStandardMaterial({ color: secondaryColor, roughness: 0.1, metalness: 0.95 });
      const ringMat3 = new THREE.MeshStandardMaterial({ color: accentAmber, roughness: 0.2, metalness: 0.85 });

      const ring1 = new THREE.Mesh(new THREE.TorusGeometry(3.6, 0.12, 16, 100), ringMat1);
      ring1.name = 'ring1';
      group.add(ring1);

      const ring2 = new THREE.Mesh(new THREE.TorusGeometry(4.6, 0.1, 16, 100), ringMat2);
      ring2.name = 'ring2';
      group.add(ring2);

      const ring3 = new THREE.Mesh(new THREE.TorusGeometry(5.6, 0.08, 16, 100), ringMat3);
      ring3.name = 'ring3';
      group.add(ring3);

      const satGroup = new THREE.Group();
      satGroup.name = 'satellites';
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const sat = new THREE.Mesh(
          new THREE.OctahedronGeometry(0.35),
          new THREE.MeshStandardMaterial({ color: goldColor, emissive: goldColor, emissiveIntensity: 0.8 })
        );
        sat.position.set(Math.cos(angle) * 4.6, Math.sin(angle) * 4.6, 0);
        satGroup.add(sat);
      }
      group.add(satGroup);
    } else if (mode === 'ai') {
      // 2. AI Neural Network Model
      const nodeCount = 42;
      const nodes = [];
      const radius = 4.2;

      const nodeMat = new THREE.MeshStandardMaterial({
        color: goldColor,
        emissive: goldColor,
        emissiveIntensity: 0.85,
        roughness: 0.2
      });

      for (let i = 0; i < nodeCount; i++) {
        const phi = Math.acos(-1 + (2 * i) / nodeCount);
        const theta = Math.sqrt(nodeCount * Math.PI) * phi;
        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);

        const node = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 16), nodeMat);
        node.position.set(x, y, z);
        group.add(node);
        nodes.push(new THREE.Vector3(x, y, z));
      }

      const linePositions = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          if (nodes[i].distanceTo(nodes[j]) < 2.5) {
            linePositions.push(nodes[i].x, nodes[i].y, nodes[i].z);
            linePositions.push(nodes[j].x, nodes[j].y, nodes[j].z);
          }
        }
      }

      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      const lineMat = new THREE.LineBasicMaterial({
        color: secondaryColor,
        transparent: true,
        opacity: 0.65,
        blending: THREE.AdditiveBlending
      });
      group.add(new THREE.LineSegments(lineGeo, lineMat));

      const innerBrain = new THREE.Mesh(
        new THREE.DodecahedronGeometry(1.8, 1),
        new THREE.MeshStandardMaterial({ color: goldColor, wireframe: true, emissive: goldColor, emissiveIntensity: 0.7 })
      );
      innerBrain.name = 'innerBrain';
      group.add(innerBrain);
    } else if (mode === 'drone') {
      // 3. Drone Hologram Matrix
      const bodyMat = new THREE.MeshStandardMaterial({ color: isLight ? 0x334155 : 0x1e293b, metalness: 0.9, roughness: 0.1 });
      const body = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.6, 2.5), bodyMat);
      group.add(body);

      const armMat = new THREE.MeshStandardMaterial({ color: goldColor, metalness: 0.8 });
      const coords = [
        [3.2, 0, 3.2],
        [-3.2, 0, 3.2],
        [3.2, 0, -3.2],
        [-3.2, 0, -3.2]
      ];

      const rotorGroup = new THREE.Group();
      rotorGroup.name = 'rotors';

      coords.forEach((coord, idx) => {
        const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 4.5), armMat);
        arm.rotation.z = Math.PI / 2;
        arm.rotation.y = idx % 2 === 0 ? Math.PI / 4 : -Math.PI / 4;
        group.add(arm);

        const motor = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.5, 16), new THREE.MeshStandardMaterial({ color: secondaryColor }));
        motor.position.set(coord[0], coord[1] + 0.3, coord[2]);
        group.add(motor);

        const prop = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.05, 0.25), new THREE.MeshBasicMaterial({ color: goldColor, transparent: true, opacity: 0.85 }));
        prop.position.set(coord[0], coord[1] + 0.6, coord[2]);
        rotorGroup.add(prop);
      });

      group.add(rotorGroup);

      const sonar = new THREE.Mesh(
        new THREE.RingGeometry(1, 5, 32),
        new THREE.MeshBasicMaterial({ color: goldColor, side: THREE.DoubleSide, transparent: true, opacity: 0.35, wireframe: true })
      );
      sonar.rotation.x = Math.PI / 2;
      sonar.position.y = -2.5;
      sonar.name = 'sonar';
      group.add(sonar);
    } else if (mode === 'quantum') {
      // 4. Quantum STEM Polyhedron
      const knot = new THREE.Mesh(
        new THREE.TorusKnotGeometry(2.8, 0.7, 128, 32, 2, 3),
        new THREE.MeshStandardMaterial({ color: goldColor, roughness: 0.15, metalness: 0.9, emissive: goldColor, emissiveIntensity: 0.4 })
      );
      knot.name = 'quantumKnot';
      group.add(knot);

      const cage = new THREE.Mesh(
        new THREE.IcosahedronGeometry(5.2, 1),
        new THREE.MeshBasicMaterial({ color: secondaryColor, wireframe: true, transparent: true, opacity: 0.3 })
      );
      cage.name = 'quantumCage';
      group.add(cage);
    }

    scene.add(group);
  }

  return (
    <div
      ref={mountRef}
      className="threejs-canvas"
      style={{ width: '100%', height: '100%' }}
      title="Drag to rotate 3D model"
    />
  );
}
