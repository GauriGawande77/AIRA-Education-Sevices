import React, { useState } from 'react';
import { Layers, Radio, Cpu, Zap, Terminal, Play, Check, Loader } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function VirtualLab({ onSoundPlay, onToast }) {
  const [sensor, setSensor] = useState('ultrasonic');
  const [mcu, setMcu] = useState('esp32');
  const [actuator, setActuator] = useState('servo');
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState([
    '[AIRA-IDE] Ready to connect...',
    '[SYS_CLOCK] 240MHz Active',
    '[PORT] /dev/ttyUSB0 (115200 8N1)',
    'Select modules and click "Run & Test Circuit" to compile & flash firmware.'
  ]);

  const handleModuleClick = (type, val) => {
    if (type === 'sensor') setSensor(val);
    if (type === 'mcu') setMcu(val);
    if (type === 'actuator') setActuator(val);
    if (onSoundPlay) onSoundPlay('click');
  };

  const runTest = () => {
    setIsRunning(true);
    if (onSoundPlay) onSoundPlay('click');

    const newLogs = [
      `[AIRA-IDE] Initializing toolchain for ${mcu.toUpperCase()}...`,
      `[AIRA-IDE] Linking hardware drivers for ${sensor.toUpperCase()}...`,
      `[COMPILER] Optimizing execution loop for ${actuator.toUpperCase()}...`
    ];
    setLogs(newLogs);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        '[SUCCESS] Firmware Flash: 100% OK (RAM: 14.2KB)',
        '[UART_0] Telemetry active at 115200 baud',
        `[LIVE_FEED] Reading: Active | Output PWM Signal: 60Hz`
      ]);
      setIsRunning(false);
      if (onSoundPlay) onSoundPlay('success');
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 }
      });
      if (onToast) onToast('Circuit compilation & telemetry test PASSED! ⚡');
    }, 1200);
  };

  const sensorName = sensor === 'ultrasonic' ? 'Sonar Distance Sensor' : sensor === 'camera' ? 'AI Neural Vision Cam' : 'Soil Moisture Sensor';
  const mcuName = mcu === 'esp32' ? 'ESP32 Dual-Core IoT' : 'Arduino UNO ATmega';
  const actuatorName = actuator === 'servo' ? 'Micro Servo Arm (0-180°)' : actuator === 'oled' ? '128x64 OLED Display' : 'Brushless Motor ESC';

  return (
    <section className="section-padding" id="simulator">
      <div className="container">
        <div className="virtual-lab-container">
          <div className="section-header" style={{ marginBottom: '24px' }}>
            <span className="section-tag">Interactive Simulation</span>
            <h2 className="section-title">
              AIRA Virtual <span className="gradient-text">Circuit & Firmware Lab</span>
            </h2>
            <p className="section-subtitle">
              Test and wire modular components in real-time before assembling physical hardware.
            </p>
          </div>

          <div className="lab-workspace">
            {/* Left: Component Selection */}
            <div className="lab-panel">
              <h4 className="lab-panel-title">
                <Layers size={16} />
                <span>Modular Modules</span>
              </h4>

              <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginTop: '4px' }}>
                1. Select Sensor
              </div>
              <div
                className={`lab-module-chip ${sensor === 'ultrasonic' ? 'selected' : ''}`}
                onClick={() => handleModuleClick('sensor', 'ultrasonic')}
              >
                <span>📡 Ultrasonic Sonar</span>
                {sensor === 'ultrasonic' && <Check size={14} style={{ color: 'var(--accent-gold)' }} />}
              </div>
              <div
                className={`lab-module-chip ${sensor === 'camera' ? 'selected' : ''}`}
                onClick={() => handleModuleClick('sensor', 'camera')}
              >
                <span>📷 AI Vision Cam</span>
                {sensor === 'camera' && <Check size={14} style={{ color: 'var(--accent-gold)' }} />}
              </div>
              <div
                className={`lab-module-chip ${sensor === 'moisture' ? 'selected' : ''}`}
                onClick={() => handleModuleClick('sensor', 'moisture')}
              >
                <span>🌱 Soil Moisture</span>
                {sensor === 'moisture' && <Check size={14} style={{ color: 'var(--accent-gold)' }} />}
              </div>

              <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginTop: '10px' }}>
                2. Select Controller
              </div>
              <div
                className={`lab-module-chip ${mcu === 'esp32' ? 'selected' : ''}`}
                onClick={() => handleModuleClick('mcu', 'esp32')}
              >
                <span>⚡ ESP32 Dual-Core</span>
                {mcu === 'esp32' && <Check size={14} style={{ color: 'var(--accent-gold)' }} />}
              </div>
              <div
                className={`lab-module-chip ${mcu === 'arduino' ? 'selected' : ''}`}
                onClick={() => handleModuleClick('mcu', 'arduino')}
              >
                <span>🔌 Arduino UNO</span>
                {mcu === 'arduino' && <Check size={14} style={{ color: 'var(--accent-gold)' }} />}
              </div>

              <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginTop: '10px' }}>
                3. Select Actuator
              </div>
              <div
                className={`lab-module-chip ${actuator === 'servo' ? 'selected' : ''}`}
                onClick={() => handleModuleClick('actuator', 'servo')}
              >
                <span>🦾 Micro Servo Arm</span>
                {actuator === 'servo' && <Check size={14} style={{ color: 'var(--accent-gold)' }} />}
              </div>
              <div
                className={`lab-module-chip ${actuator === 'oled' ? 'selected' : ''}`}
                onClick={() => handleModuleClick('actuator', 'oled')}
              >
                <span>📟 OLED Display</span>
                {actuator === 'oled' && <Check size={14} style={{ color: 'var(--accent-gold)' }} />}
              </div>
            </div>

            {/* Middle: Circuit Stage */}
            <div className="lab-stage-canvas">
              <div className="circuit-node">
                <Radio size={26} style={{ color: 'var(--accent-gold)' }} />
                <strong style={{ fontSize: '0.85rem' }}>{sensorName}</strong>
                <span style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', fontFamily: 'var(--font-mono)' }}>INPUT SENSOR</span>
              </div>

              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} viewBox="0 0 400 100" preserveAspectRatio="none">
                <path className="wire-path" d="M 100,50 L 200,50 L 300,50" fill="none" />
              </svg>

              <div className="circuit-node pulse">
                <Cpu size={28} style={{ color: 'var(--accent-sapphire-light)' }} />
                <strong style={{ fontSize: '0.85rem' }}>{mcuName}</strong>
                <span style={{ fontSize: '0.7rem', color: 'var(--accent-sapphire-light)', fontFamily: 'var(--font-mono)' }}>CONTROLLER</span>
              </div>

              <div className="circuit-node">
                <Zap size={26} style={{ color: 'var(--accent-emerald)' }} />
                <strong style={{ fontSize: '0.85rem' }}>{actuatorName}</strong>
                <span style={{ fontSize: '0.7rem', color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>ACTUATOR</span>
              </div>
            </div>

            {/* Right: Telemetry Terminal */}
            <div className="lab-panel">
              <h4 className="lab-panel-title">
                <Terminal size={16} />
                <span>UART Serial Telemetry</span>
              </h4>
              <div className="telemetry-box">
                {logs.map((log, i) => (
                  <div key={i}>{log}</div>
                ))}
              </div>
              <button
                className="btn btn-luxury-gold btn-sm"
                onClick={runTest}
                disabled={isRunning}
                style={{ marginTop: '14px', width: '100%' }}
              >
                {isRunning ? (
                  <>
                    <Loader size={16} className="animate-spin" />
                    <span>Compiling Firmware...</span>
                  </>
                ) : (
                  <>
                    <Play size={16} />
                    <span>Run & Test Circuit</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
