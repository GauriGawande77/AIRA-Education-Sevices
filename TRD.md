# Technical Requirements Document (TRD)

## React E-Commerce Website (India-Focused)

| Document field | Value |
|---|---|
| Status | Implementation-ready baseline |
| Version | 1.0 |
| Date | 29 August 2026 |
| Primary market | India |
| Currency | INR (₹) |
| Frontend | React + TypeScript |
| Reference | [AIRA Education & Services](https://airaedu.netlify.app/) |

---

## 1. Purpose

This document defines the functional, technical, design, operational, and quality requirements for a production-ready React e-commerce website. It is intended for product managers, designers, frontend and backend developers, QA engineers, DevOps engineers, security reviewers, and business stakeholders.

The website will sell physical products, kits, accessories, and optional digital learning material. It should preserve the reference site's energetic, education-led presentation while adding the architecture, reliability, security, administration, and integrations required for a real commerce platform.

## 2. Reference-site observations

The reference site was inspected on 29 August 2026. The proposed product should take inspiration from—not duplicate—the following visible patterns:

- A strong hero area with a clear value proposition, supporting metrics, and calls to action.
- An India-oriented visual identity and copy style, including INR pricing and local contact details.
- Educational and trust-building sections: benefits, technology focus, learning journey, gallery, testimonials, FAQs, and institutional/bulk-order CTA.
- A product page featuring a promoted bundle, category tabs, text search, sorting, product counts, product cards, ratings, stock labels, discounted prices, wishlist buttons, quick-view actions, and add-to-cart controls.
- An off-canvas cart and payment choices such as COD, UPI/QR, bank transfer/NEFT, and online card/net-banking payment.
- Product categories such as Robotics, IoT, AI Kits, STEM, Drone, and 3D Printing.
- Store assurances such as free shipping thresholds, quality assurance, returns, learning guides, and support.

Production improvements required beyond the reference include dedicated product detail pages, persistent user accounts, authoritative server-side pricing and inventory, a complete checkout, payment verification, order tracking, returns, admin controls, accessibility, SEO, observability, and automated testing.

## 3. Product vision and goals

### 3.1 Vision

Create a fast, trustworthy, mobile-first commerce experience that helps Indian customers discover, understand, and confidently purchase technical or educational products.

### 3.2 Business goals

- Convert product discovery traffic into completed orders.
- Support retail and institutional/bulk customers.
- Increase average order value through bundles, related products, and threshold-based free delivery.
- Reduce support workload through clear product information, FAQs, order tracking, and self-service returns.
- Enable non-technical staff to manage catalogue, inventory, offers, content, and orders.
- Produce reliable analytics without compromising user consent or privacy.

### 3.3 Success metrics

- Product-list-to-product-detail click-through rate.
- Add-to-cart rate and checkout completion rate.
- Cart abandonment rate.
- Search success rate and zero-result rate.
- Conversion rate by device, source, and payment method.
- Average order value and repeat-purchase rate.
- Payment failure rate, COD share, cancellation rate, return rate, and refund turnaround time.
- Core Web Vitals pass rate at the 75th percentile.
- Customer support contacts per 100 orders.

## 4. Scope

### 4.1 In scope for initial production release

- Responsive public storefront and content pages.
- Category, collection, search, filtering, sorting, and pagination.
- Product detail, variants, inventory status, ratings, and recommendations.
- Guest and authenticated carts.
- Wishlist for authenticated users, with local guest fallback.
- Email/mobile-based account workflows.
- Address management with Indian PIN-code support.
- Coupons, tax, delivery calculation, and order totals.
- Online payments, UPI, COD eligibility, webhook verification, refunds.
- Order history, order detail, invoice, shipment tracking, cancellation, and return request.
- Admin portal for catalogue, inventory, pricing, promotions, orders, refunds, customers, content, and reporting.
- Transactional notifications.
- Analytics, audit trails, logging, monitoring, SEO, accessibility, and deployment pipeline.

### 4.2 Out of scope for initial release

- Native Android/iOS apps.
- International currency, tax, and cross-border fulfilment.
- Multi-vendor marketplace settlement.
- Advanced warehouse management.
- Subscription billing.
- Loyalty points and gift cards unless promoted into scope.
- Automated recommendation models; rule-based recommendations are sufficient initially.

## 5. Users and roles

| Role | Capabilities |
|---|---|
| Guest | Browse, search, filter, manage local cart, begin checkout, place guest order if enabled |
| Customer | Profile, saved addresses, persistent cart/wishlist, orders, invoices, returns, reviews |
| Support agent | Read customer/order data, add internal notes, initiate approved service workflows |
| Catalogue manager | Manage products, categories, attributes, media, SEO, prices, and promotions |
| Fulfilment manager | Manage inventory, packing, shipping, status, cancellations, and returns |
| Finance manager | Review payments, COD reconciliation, refunds, tax invoices, reports |
| Administrator | Full configuration, users, roles, feature flags, integrations, and audit access |

Use role-based access control (RBAC), least privilege, and separate permissions for viewing, creating, editing, approving, exporting, and refunding.

## 6. Key customer journeys

1. Visitor lands on the homepage, understands the proposition, explores a category, opens a product, adds it to cart, checks delivery availability, and completes checkout.
2. Visitor searches a term, applies filters, changes sort order, opens quick view, and compares options before purchase.
3. Customer signs in by email/password or mobile OTP, retrieves a previous cart, and checks out with a saved address.
4. Customer pays by UPI/card/net banking through the gateway and receives an order confirmation only after server-side verification.
5. Customer chooses COD when the address, order value, and product mix are eligible.
6. Customer opens order history, downloads an invoice, tracks shipment, or requests cancellation/return.
7. School or institution submits a bulk enquiry linked to selected products and quantities.
8. Admin creates a product with variants, uploads media, sets GST/HSN details, publishes it, adjusts stock, and fulfils an order.

## 7. Information architecture and routing

Use human-readable, lowercase, hyphenated URLs. Product and category routes must have stable slugs.

| Route | Purpose | Access |
|---|---|---|
| `/` | Homepage | Public |
| `/shop` | All products | Public |
| `/category/:categorySlug` | Category listing | Public |
| `/collections/:collectionSlug` | Curated collection | Public |
| `/products/:productSlug` | Product detail | Public |
| `/search?q=` | Search results | Public |
| `/cart` | Full cart | Public |
| `/checkout` | Checkout shell | Public/authenticated |
| `/checkout/success/:orderNumber` | Order result | Token-protected |
| `/login`, `/register`, `/forgot-password`, `/verify` | Authentication | Public |
| `/account` | Account overview | Authenticated |
| `/account/profile` | Profile | Authenticated |
| `/account/addresses` | Address book | Authenticated |
| `/account/wishlist` | Wishlist | Authenticated |
| `/account/orders` | Order history | Authenticated |
| `/account/orders/:orderNumber` | Order detail | Owner/admin only |
| `/track-order` | Guest order tracking | Public with verification |
| `/bulk-orders` | Institutional enquiry | Public |
| `/about`, `/contact`, `/faq`, `/shipping`, `/returns`, `/privacy`, `/terms` | Content/legal | Public |
| `/admin/*` | Admin portal | Authorized staff only |
| `*` | Branded 404 | Public |

### Routing rules

- Use React Router with route-level lazy loading.
- Preserve catalogue state in query parameters, e.g. `?category=iot&price=500-2000&sort=price_asc&page=2`.
- Support browser back/forward without losing filters or scroll context.
- Use protected-route guards for account/admin UI, but enforce authorization again on the API.
- Redirect obsolete product slugs using server-managed permanent redirects.
- Return meaningful HTTP status codes for SSR/prerendered SEO routes where applicable.

## 8. UI/UX requirements

### 8.1 Design direction

- Modern, optimistic, practical, and learning-oriented.
- Strong hero copy and product storytelling, with real product photography or illustrations.
- Clear visual separation between education/content and shopping actions.
- Use a consistent token-based design system; avoid one-off colours and spacing.
- Display trust signals near decision points: delivery, returns, warranty, secure payment, support, ratings, and stock.
- Never use fake urgency, fabricated scarcity, preselected paid add-ons, or misleading discounts.

### 8.2 Core design tokens

Define colour, typography, spacing, radius, elevation, borders, motion, breakpoints, and z-index tokens in a shared theme. Minimum semantic colours: primary, secondary, accent, surface, text, muted, success, warning, danger, info, focus, and disabled. All text/background combinations must meet WCAG contrast requirements.

### 8.3 Global header

- Logo linked to home.
- Primary navigation: Shop, categories, bundles/collections, learning/about, bulk orders, contact.
- Prominent search entry.
- Account, wishlist, and cart icons with accessible names and item counts.
- Optional announcement bar for delivery or promotional messages.
- Sticky behaviour only if it does not reduce usable mobile viewport excessively.
- Mobile navigation must trap focus, close with Escape, and restore focus to its trigger.

### 8.4 Homepage

- Hero with value proposition, primary shop CTA, secondary explore/learn CTA, and optimized media.
- Trust/service strip.
- Featured categories and promoted bundle.
- Best sellers/new arrivals.
- Benefits/use cases and educational context.
- Testimonials or verified review summaries.
- Institutional/bulk-order CTA.
- FAQs with accessible disclosure controls.
- Newsletter/lead capture only with explicit consent wording.

### 8.5 Product card

Show image, brand/category, name, rating and count, current price, MRP where applicable, discount, inventory state, primary variant summary, wishlist control, and add/choose-options button. Product cards must remain usable without hover. Avoid exposing “Add” if required variants are unselected.

### 8.6 Product detail page

- Breadcrumbs and canonical product title.
- Media gallery with zoom, thumbnail navigation, alt text, and video support.
- Rating summary and review link.
- Price, inclusive-tax message, MRP, discount, and offer terms.
- Variant selectors with unavailable combinations disabled.
- Stock state and quantity rules.
- PIN-code serviceability check and delivery estimate.
- Add to cart, buy now, wishlist, and share.
- Specifications, package contents, compatibility, age/safety guidance, learning outcomes, warranty, shipping, and returns.
- Downloadable manual or guide where applicable.
- Related products, frequently bought together, and recently viewed.
- Structured data for Product, Offer, AggregateRating only when backed by real data.

### 8.7 Feedback and interaction states

- Skeletons for page/section loads; progress feedback for actions.
- Inline validation plus a summary for checkout failures.
- Toasts for reversible, low-risk feedback; persistent messages for payment/order states.
- Confirmation dialogs for destructive actions such as deleting an address.
- Empty states for cart, wishlist, orders, search, and category results with useful next actions.
- Motion must respect `prefers-reduced-motion`.

## 9. Responsive and mobile requirements

- Mobile-first CSS; support viewport widths from 320 px upward.
- Target breakpoints: 360, 480, 768, 1024, 1280, and 1536 px, implemented through content-driven tokens rather than device names.
- No horizontal scrolling at supported widths except intentional carousels/tables.
- Touch targets at least 44×44 CSS pixels.
- Product grids: 2 columns on typical phones when legible, 3 on tablets, 4+ on desktop.
- Filters use a bottom sheet/drawer on mobile and a sidebar on wide screens.
- Sticky mobile add-to-cart bar may be used after the main purchase panel scrolls away.
- Checkout uses a single-column mobile flow; order summary remains easily accessible.
- Handle long product names, large INR values, translated text, notches/safe areas, virtual keyboards, and landscape mode.
- Validate on current Chrome/Android, Safari/iOS, Chrome/Edge desktop, and Firefox desktop.

## 10. Frontend architecture

### 10.1 Technology baseline

- React 19 or current supported stable version.
- TypeScript with `strict` enabled.
- Vite for a client-rendered storefront; prefer Next.js or React Router framework/SSR mode if organic SEO and server rendering are business-critical. This TRD assumes the React UI is framework-portable.
- Feature-oriented modules with shared primitives, typed API boundaries, and route-level code splitting.
- API is the source of truth for products, prices, inventory, promotions, customers, payments, and orders.

### 10.2 Rendering strategy

- Pre-render/SSR public marketing, category, and product pages when possible.
- Hydrate interactive commerce elements on the client.
- Keep account, checkout, and admin dynamic and non-indexable where appropriate.
- Cache public catalogue queries with explicit freshness and invalidation rules.
- Never store authoritative price, discount, tax, stock, or order totals only in frontend state.

### 10.3 Component principles

- Separate presentational components from data orchestration.
- Prefer composition over large prop-heavy components.
- Use a shared component library with Storybook.
- Forms must use reusable field wrappers, schema validation, accessible errors, and server-error mapping.
- Error boundaries at application, route, checkout, and admin-module levels.

## 11. Suggested React folder structure

```text
src/
├── app/
│   ├── App.tsx
│   ├── router.tsx
│   ├── providers.tsx
│   ├── queryClient.ts
│   └── error-boundary.tsx
├── assets/
├── components/
│   ├── ui/
│   ├── layout/
│   ├── feedback/
│   └── commerce/
├── features/
│   ├── auth/
│   ├── catalogue/
│   ├── search/
│   ├── product/
│   ├── cart/
│   ├── wishlist/
│   ├── checkout/
│   ├── orders/
│   ├── reviews/
│   ├── content/
│   └── admin/
├── pages/
│   ├── storefront/
│   ├── account/
│   ├── checkout/
│   └── admin/
├── api/
│   ├── client.ts
│   ├── contracts.ts
│   └── errors.ts
├── hooks/
├── lib/
│   ├── analytics/
│   ├── auth/
│   ├── currency/
│   ├── validation/
│   └── observability/
├── styles/
│   ├── tokens.css
│   └── global.css
├── types/
├── config/
├── test/
├── main.tsx
└── vite-env.d.ts
```

Each feature should contain its components, hooks, queries/mutations, schema, types, tests, and public barrel only where helpful. Avoid a single global `utils` dumping ground.

## 12. Recommended libraries

Pin versions through the lockfile and verify current compatibility before implementation.

| Concern | Recommendation |
|---|---|
| Routing | React Router |
| Server state | TanStack Query |
| Small client state | Zustand or Redux Toolkit; choose one based on team familiarity |
| Forms | React Hook Form |
| Validation | Zod, shared with generated API types where possible |
| HTTP | Native `fetch` wrapper or Axios with standardized interceptors |
| Styling | CSS Modules, Tailwind CSS, or styled solution chosen once; pair with design tokens |
| Accessible primitives | Radix UI or React Aria |
| Icons | Lucide React |
| Tables/admin | TanStack Table |
| Carousel | Embla Carousel |
| Dates | date-fns |
| Testing | Vitest, React Testing Library, MSW, Playwright |
| Component docs | Storybook |
| Error monitoring | Sentry or equivalent |
| Analytics | GA4 plus consent mode, or a privacy-friendly alternative |
| API typing | OpenAPI-generated types/client |
| Payments | Gateway-hosted/official SDK, e.g. Razorpay/PayU/Cashfree, selected commercially |

Do not add a library for functionality that is small, stable, and clearer with platform APIs.

## 13. State management

| State type | Location |
|---|---|
| Products, inventory snapshots, orders, profile | TanStack Query/server state |
| Cart | Server-backed cart with local guest identifier; optimistic UI with reconciliation |
| Wishlist | Server-backed for users; local fallback for guests |
| Filters/sort/page | URL search parameters |
| UI drawer/modal/toast state | Local component state or small UI store |
| Auth session | Secure server session; minimal client session metadata |
| Checkout draft | Scoped store plus server checkout session; do not persist payment secrets |

- Persist only safe, necessary guest state.
- Merge guest cart/wishlist after login using documented conflict rules.
- Revalidate cart price, promotion, tax, inventory, shipping, and eligibility at checkout and before order creation.
- Cross-tab cart updates should use BroadcastChannel or storage events where supported.

## 14. Catalogue and product requirements

### 14.1 Product model

Support simple and variant products. Required capabilities:

- Name, slug, short and full description.
- Product type, brand, categories, collections, tags, and attributes.
- SKU per sellable variant.
- MRP, selling price, cost (admin-only), tax class, GST rate, HSN/SAC code.
- Images/video/manuals with ordering and alt text.
- Variant dimensions such as colour, size, capacity, kit level.
- Weight and package dimensions for shipping.
- Stock, reserved stock, reorder level, backorder/preorder policy.
- Warranty, return eligibility, safety/age guidance, country of origin.
- SEO title, description, canonical URL, and publication status.
- Related/cross-sell/upsell associations.

### 14.2 Listing behaviour

- Server-side pagination; cursor pagination preferred for large catalogues, page numbers acceptable for SEO listings.
- Configurable page size with a safe maximum.
- Preserve filters when changing sort or pagination.
- Show applied-filter chips and a clear-all action.
- Announce result-count changes to assistive technology.
- Deactivated products disappear from discovery but historical order records remain intact.

## 15. Search, filtering, and sorting

### 15.1 Search

- Search product name, SKU, brand, category, tags, specifications, and selected synonyms.
- Debounced suggestions after 2–3 characters.
- Keyboard-navigable suggestions with product/category distinction.
- Typo tolerance, stemming/transliteration rules where supported, and configurable synonyms.
- Highlight matching terms safely; never inject raw HTML.
- Track queries, clicks, conversions, and zero-result queries without storing unnecessary personal data.
- Offer spelling suggestions and popular categories on zero results.

Use database full-text search for a small catalogue; adopt Meilisearch, Typesense, Algolia, or OpenSearch when scale/relevance needs justify it.

### 15.2 Filters

- Category, collection, brand, price range, rating, availability, discount, and product-specific attributes.
- Facet counts must reflect current filters.
- Price uses paise internally; UI formats INR with Indian grouping.
- Mobile filter drawer must have Apply, Clear, result count, focus management, and retained selections.

### 15.3 Sort options

- Featured/relevance.
- Newest.
- Price low to high / high to low.
- Rating.
- Popularity/best selling.
- Discount, only if the business explicitly wants it.

Backend must whitelist sort keys to prevent unsafe query construction.

## 16. Cart

- Add, remove, change quantity, change variant, move to wishlist, and clear cart.
- Mini-cart/off-canvas cart plus full cart page.
- Show image, variant, unit price, quantity, line discount, availability, and line total.
- Quantity may not exceed available/reservable stock or configured per-order limits.
- Display coupon, subtotal, discount, estimated shipping, estimated tax, and total.
- Explicitly label totals as estimates until address and server validation are complete.
- Display free-shipping progress if a threshold applies.
- Cart survives refresh; authenticated cart persists server-side.
- Reserve inventory only at a defined checkout/payment stage and release it on expiry.
- Server returns structured cart warnings for price changes, removed items, insufficient stock, and expired promotions.
- Every mutation accepts an idempotency key where duplicate actions could be harmful.

## 17. Wishlist

- Add/remove from product card and detail page.
- Require sign-in for durable persistence; allow a guest-local list and offer merge after login.
- Show current price, availability, and move-to-cart action.
- Do not reveal private wishlists through guessable URLs.
- Optional back-in-stock and price-drop alerts require explicit notification consent.

## 18. Authentication and account

### 18.1 Supported flows

- Email/password registration and login.
- Mobile OTP login is recommended for India, using rate-limited verified providers.
- Email verification, forgot/reset password, logout all sessions.
- Optional Google login after privacy and operational review.
- Guest checkout may be enabled; create/claim account after order without forcing a password during payment.

### 18.2 Security model

- Prefer secure, HTTP-only, `SameSite=Lax` or stricter session cookies.
- Rotate sessions after login and privilege changes.
- Hash passwords with Argon2id or an approved equivalent.
- Short-lived, one-time OTP/reset tokens stored as hashes with attempt and expiry limits.
- MFA required for admin and strongly recommended for privileged staff.
- Avoid storing auth tokens in `localStorage`.
- Generic responses for login/password recovery to reduce account enumeration.

### 18.3 Profile

- Name, verified email/mobile, communication preferences, saved addresses, password/security settings.
- Support account deletion/export workflows according to applicable policy and law.

## 19. Checkout

### 19.1 Checkout steps

1. Contact/login or guest identification.
2. Delivery address.
3. Shipping method and promise date.
4. Coupon/store credit if supported.
5. Payment method.
6. Final review and explicit Place Order action.
7. Processing state and success/failure result.

### 19.2 Indian address requirements

- Full name, mobile number, address line 1, optional line 2, landmark (optional), locality/city, state/UT, six-digit PIN code, address type.
- Validate PIN format client and server side.
- Serviceability, courier, COD, and estimated delivery are determined server-side.
- State and city suggestions may be derived from a maintained PIN-code dataset, with manual correction.
- GSTIN and business name fields for B2B invoices when requested; validate format and retain tax evidence according to policy.

### 19.3 Totals

All calculations occur on the server using integer paise or fixed-precision decimals. Calculation order and rounding must be documented. The order summary must identify:

- Item MRP and selling price.
- Product/line/order discounts.
- Coupon discount.
- Shipping and handling.
- GST-inclusive amount or tax breakup as required.
- COD fee if applicable.
- Grand total and amount payable.

Never trust amounts, coupon validity, or shipping fees supplied by the browser.

## 20. Payment requirements

- Integrate one PCI-compliant Indian gateway using its hosted checkout or official SDK.
- Target UPI, cards, net banking, wallets supported by the provider, and COD.
- Never store card number, CVV, UPI PIN, or raw payment credentials.
- Create payment/order intents on the server.
- Verify gateway signature and amount on the server.
- Use gateway webhooks as the authoritative asynchronous source and make processing idempotent.
- Show `processing` when the customer returns before webhook confirmation; poll safely or use real-time updates.
- Reconcile payments through a scheduled job and admin report.
- Configure payment timeouts and inventory-reservation release.
- Handle success, failure, abandonment, duplicate callbacks, late success, partial refund, full refund, and chargeback/dispute.
- COD eligibility must be configurable by PIN code, amount, product, fraud risk, and customer history.
- Bank transfer/NEFT should remain manual-review only unless automated reconciliation is implemented; display an expiry and unique reference.

### Payment state machine

`CREATED → PENDING → AUTHORIZED/CAPTURED → FAILED | CANCELLED | REFUNDED | PARTIALLY_REFUNDED | DISPUTED`

Only permitted transitions may be applied; every transition records actor/source, timestamp, provider event ID, and metadata.

## 21. Orders, fulfilment, cancellations, and returns

### 21.1 Order states

`DRAFT → PENDING_PAYMENT → CONFIRMED → PROCESSING → PACKED → SHIPPED → OUT_FOR_DELIVERY → DELIVERED`

Terminal/exception branches: `PAYMENT_FAILED`, `CANCELLED`, `RETURN_REQUESTED`, `RETURN_APPROVED`, `RETURN_IN_TRANSIT`, `RETURNED`, `REFUND_PENDING`, `REFUNDED`, `PARTIALLY_REFUNDED`.

Payment and fulfilment statuses must be stored separately to avoid ambiguous state.

### 21.2 Customer capabilities

- Order confirmation with non-sequential public order number.
- Timeline and shipment tracking.
- Invoice download after valid invoice generation.
- Cancellation before configurable fulfilment cutoff.
- Return request per eligible item with reason, quantity, evidence upload where necessary, and pickup/drop-off status.
- Refund status and expected timeline.
- Guest tracking requires order number plus verified email/mobile OTP or signed token.

### 21.3 Operational rules

- Snapshot product title, SKU, variant, price, tax, and address on the order.
- Do not rewrite historical orders when catalogue data changes.
- Inventory adjustments use append-only movements and transactional consistency.
- Generate GST-compliant invoices/credit notes according to accountant/legal review.
- Integrate shipping aggregator/courier APIs behind an adapter so providers can change.

## 22. Promotions and coupons

- Fixed and percentage discounts; product/category/order scope.
- Start/end time, minimum spend, maximum discount, usage cap, per-customer cap, new-customer rule, payment-method rule, and stackability.
- Free-shipping promotions and automatic bundles.
- Coupon validation and final calculation occur server-side.
- Promotion conflicts use an explicit priority/stacking policy.
- Prevent brute-force coupon discovery with rate limits and generic errors.
- Admin preview must explain why a cart qualifies or fails.

## 23. Reviews and ratings

- Only verified purchasers may receive a verified badge.
- Rating from 1–5; title, body, optional approved media.
- Moderation states: pending, published, rejected, flagged.
- Aggregate rating recalculated server-side.
- Prevent duplicate reviews per order item unless edits are allowed.
- Disclose incentives. Do not publish fabricated testimonials or structured rating data.

## 24. Admin portal

### 24.1 Dashboard

- Revenue/order summaries, payment success, inventory alerts, fulfilment backlog, returns, and top products.
- Date, channel, category, payment, and status filters.
- Metrics definitions must be documented to avoid inconsistent reports.

### 24.2 Catalogue

- Draft/publish/archive products.
- Variant/SKU management.
- Category/collection/attribute management.
- Media upload, ordering, alt text, compression status.
- Bulk CSV import/export with validation preview and failure report.
- SEO fields and redirect management.

### 24.3 Inventory

- Stock on hand, reserved, available, damaged, and returned.
- Manual adjustments require reason and audit entry.
- Low-stock thresholds and alerts.
- Import/reconciliation operations must be idempotent.

### 24.4 Orders and customer service

- Search by order number, email, mobile, payment ID, tracking ID.
- View status history and internal notes.
- Fulfil, cancel, approve returns, and initiate refunds according to permissions.
- Sensitive fields masked by default where operationally possible.
- Exports restricted, audited, and time-bounded.

### 24.5 Configuration

- Shipping zones/rates, COD rules, tax classes, payment methods, free-shipping threshold, return windows, notification templates, feature flags.
- Changes that affect money or access should support maker-checker approval where feasible.

## 25. Backend architecture

### 25.1 Recommended approach

- Modular monolith initially for speed and transactional simplicity.
- Node.js with TypeScript using NestJS, Fastify, or Express with a documented layering standard.
- PostgreSQL as the transactional database.
- Redis for rate limits, short-lived sessions/cache, queues, and distributed locks where justified.
- Object storage plus CDN for product media and documents.
- Background worker for email/SMS, search indexing, invoice generation, webhooks, reconciliation, and reports.
- OpenAPI 3.1 as the contract source; generate typed clients.

Suggested modules: Identity, Customers, Catalogue, Pricing, Inventory, Cart, Promotions, Checkout, Payments, Orders, Fulfilment, Returns, Reviews, Content, Notifications, Analytics, and Admin/Audit.

### 25.2 API conventions

- Base path: `/api/v1`.
- JSON request/response; UTF-8.
- ISO 8601 UTC timestamps; display in user locale.
- Money represented as integer paise plus ISO currency code.
- Use UUID/ULID internally; opaque identifiers publicly.
- Standard pagination metadata.
- `Idempotency-Key` for order, payment, refund, and other retry-sensitive mutations.
- Correlation/request ID returned in headers and error payloads.
- Optimistic concurrency/version field for sensitive admin updates.
- API deprecation and versioning policy.

### 25.3 Standard error contract

```json
{
  "error": {
    "code": "CART_ITEM_OUT_OF_STOCK",
    "message": "One item is no longer available in the requested quantity.",
    "fieldErrors": [
      { "field": "items[0].quantity", "code": "MAX_AVAILABLE", "message": "Maximum available quantity is 2." }
    ],
    "requestId": "req_01...",
    "retryable": false
  }
}
```

Do not expose stack traces, SQL, provider secrets, or internal exception names.

## 26. API contract summary

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/products` | Paginated catalogue with search/filter/sort |
| GET | `/products/:slug` | Product detail and variants |
| GET | `/categories` | Category tree/facets |
| GET | `/search/suggestions?q=` | Search suggestions |
| POST | `/auth/register` | Register customer |
| POST | `/auth/login` | Authenticate |
| POST | `/auth/otp/request` | Request OTP with throttling |
| POST | `/auth/otp/verify` | Verify OTP |
| POST | `/auth/logout` | End session |
| GET/PATCH | `/me` | Read/update profile |
| GET/POST/PATCH/DELETE | `/me/addresses` | Address book |
| GET/POST/DELETE | `/wishlist` | Wishlist operations |
| GET | `/cart` | Read active cart |
| POST | `/cart/items` | Add item |
| PATCH/DELETE | `/cart/items/:itemId` | Change/remove item |
| POST | `/cart/coupon` | Apply coupon |
| DELETE | `/cart/coupon` | Remove coupon |
| POST | `/checkout/quote` | Validate cart, address, shipping, totals |
| POST | `/checkout/orders` | Idempotently create order/payment intent |
| POST | `/payments/:orderId/verify` | Verify provider return where required |
| POST | `/webhooks/payments/:provider` | Signed provider webhook |
| GET | `/orders` | Customer order history |
| GET | `/orders/:orderNumber` | Authorized order detail |
| POST | `/orders/:orderNumber/cancel` | Request cancellation |
| POST | `/orders/:orderNumber/returns` | Request return |
| GET | `/orders/:orderNumber/invoice` | Authorized invoice download |
| POST | `/reviews` | Create verified review |
| GET | `/products/:productId/reviews` | Published reviews |
| POST | `/bulk-enquiries` | Submit institutional enquiry |
| `/admin/*` | Admin resources | RBAC protected |

### Example product response

```json
{
  "id": "prd_01...",
  "name": "Arduino Starter Kit",
  "slug": "arduino-starter-kit",
  "currency": "INR",
  "pricePaise": 149900,
  "mrpPaise": 199900,
  "taxInclusive": true,
  "rating": { "average": 4.8, "count": 42 },
  "variants": [
    {
      "id": "var_01...",
      "sku": "KIT-ARD-UNO-01",
      "attributes": { "edition": "Standard" },
      "availableQuantity": 28,
      "status": "IN_STOCK"
    }
  ],
  "media": [
    { "url": "https://cdn.example.in/p/...", "alt": "Arduino starter kit components", "type": "IMAGE" }
  ]
}
```

## 27. Database schema

Use PostgreSQL migrations and foreign-key constraints. Key tables:

| Table | Important fields/relationships |
|---|---|
| `users` | id, role/status, email/mobile normalized, verification timestamps |
| `credentials` | user_id, password_hash, password_changed_at |
| `sessions` | user_id, token_hash, expiry, device metadata, revoked_at |
| `addresses` | user_id, name, mobile, lines, city, state, pin_code, type |
| `products` | id, slug, name, descriptions, brand_id, status, SEO, tax_class_id |
| `product_variants` | product_id, sku unique, attributes JSONB, price, mrp, weight/dimensions |
| `categories` | id, parent_id, name, slug, position, status |
| `product_categories` | product_id, category_id |
| `media` | owner type/id, URL/key, alt, type, position |
| `inventory_locations` | name, code, address/status |
| `inventory_levels` | variant_id, location_id, on_hand, reserved, version |
| `inventory_movements` | variant/location, quantity delta, reason, reference, actor |
| `carts` | user_id or guest_token_hash, currency, status, expiry, version |
| `cart_items` | cart_id, variant_id, quantity, metadata |
| `wishlists` / `wishlist_items` | user_id, variant/product, timestamps |
| `promotions` | type, value, constraints, priority, start/end, status |
| `coupons` | promotion_id, code_hash/normalized code, caps and usage |
| `orders` | public number, user/guest, status, payment_status, totals, address snapshots |
| `order_items` | order_id, variant_id nullable, SKU/title snapshot, quantities, money/tax snapshot |
| `payments` | order_id, provider, provider references, amount, status, idempotency fields |
| `payment_events` | payment_id, provider_event_id unique, event type, payload reference, processed_at |
| `shipments` | order_id, carrier, tracking, status, promise/delivery dates |
| `returns` / `return_items` | order/item, reason, state, resolution, refund linkage |
| `refunds` | payment/order, amount, provider reference, status |
| `reviews` | user/order_item/product, rating, content, moderation state |
| `bulk_enquiries` | institution/contact fields, requirements, consent, status |
| `notifications` | user/order, channel, template, state, provider reference |
| `audit_logs` | actor, action, entity, before/after diff, request ID, timestamp |
| `outbox_events` | aggregate, event type, payload, status, attempts |

### Schema rules

- Unique indexes on normalized email/mobile, SKU, slug, coupon code as appropriate, and provider event IDs.
- Index product status/category/brand, order customer/date/status, and searchable fields.
- Use soft deletion only where business/legal history requires it; otherwise explicit archival status.
- Encrypt or tokenize sensitive fields when justified; tightly restrict raw address/contact access.
- Use an outbox pattern for reliable events after database transactions.
- Retention and deletion jobs must respect accounting, tax, fraud, and privacy obligations.

## 28. Security requirements

- Follow OWASP ASVS Level 2 as the baseline and OWASP API Security guidance.
- TLS everywhere; HSTS in production.
- Secure headers: CSP, frame restrictions, Referrer-Policy, Permissions-Policy, and content-type protections.
- CSRF protection for cookie-authenticated mutations.
- Strict server-side validation and output encoding.
- Parameterized queries/ORM safeguards; no client-controlled SQL fields.
- Rate limits by route, account, IP/device signal, and provider cost.
- Bot/fraud controls on login, OTP, coupon, review, checkout, and COD without blocking legitimate users unnecessarily.
- Signed, timestamped webhooks with replay protection.
- Secrets in a managed secret store, never in source control or frontend bundles.
- Malware/type/size validation for uploads; store outside the web root and serve through controlled URLs.
- Admin MFA, short idle timeout, IP/device alerts where appropriate, and complete audit logs.
- Dependency, SAST, secret, container, and infrastructure scanning in CI.
- Backups encrypted in transit/at rest and restore-tested.
- Incident response playbook and breach escalation contacts.
- Annual penetration test and before major payment/auth changes.

Compliance scope—including GST invoicing, consumer protection, privacy/DPDP obligations, PCI responsibility, returns, and data retention—must be confirmed by qualified legal/accounting/security stakeholders before launch.

## 29. Privacy and consent

- Collect only data required for fulfilment, security, support, and consented marketing.
- Provide clear privacy notice and purpose at collection points.
- Separate transactional messages from marketing consent.
- Consent manager must gate non-essential analytics/advertising where required.
- Record consent version, purpose, time, and source.
- Provide processes for access, correction, deletion, withdrawal, and grievance handling.
- Avoid placing PII in URLs, analytics events, logs, or error-monitoring breadcrumbs.

## 30. Performance requirements

Targets apply at the 75th percentile for real users on mobile:

| Metric | Target |
|---|---|
| LCP | ≤ 2.5 s |
| INP | ≤ 200 ms |
| CLS | ≤ 0.1 |
| Initial JS (compressed) | Budget set per architecture; aim ≤ 250 KB for storefront shell |
| API catalogue p95 | ≤ 500 ms excluding network |
| Add-to-cart p95 | ≤ 700 ms excluding network |
| Checkout quote p95 | ≤ 1 s excluding third parties |
| Availability | 99.9% monthly storefront/API target, excluding planned maintenance |

Techniques:

- Route/component code splitting and tree shaking.
- Responsive AVIF/WebP images, explicit dimensions, lazy loading below the fold, priority hero image.
- CDN for static and media assets.
- Cache-control, ETag, stale-while-revalidate where safe.
- Avoid layout-shifting fonts; subset and preload only essential font files.
- Virtualize only genuinely large admin lists, not normal product grids.
- Monitor bundle size and Core Web Vitals in CI/production.
- Load payment, chat, maps, and analytics scripts only when required/consented.

## 31. SEO requirements

- Unique title, description, canonical URL, H1, and indexability per page.
- SSR/prerender public product/category content where feasible.
- XML sitemap index for products, categories, collections, and content.
- `robots.txt` excludes account, checkout, admin, internal search/filter explosions.
- Canonical/facet rules to prevent duplicate-index pages.
- Product, Offer, BreadcrumbList, Organization, and valid Review structured data.
- Open Graph and social preview metadata.
- Descriptive slugs and permanent redirects for changes.
- Search results and empty categories default to `noindex` unless an SEO strategy says otherwise.
- Product unavailability policy: keep temporarily unavailable pages; return 404/410 or redirect only by defined lifecycle rules.
- Google Merchant Center feed may be added after product data quality is verified.

## 32. Accessibility requirements

Conform to WCAG 2.2 AA.

- Semantic landmarks and logical heading order.
- Complete keyboard support, visible focus, skip link, and no keyboard traps.
- Form labels, instructions, required indicators, autocomplete attributes, and accessible errors.
- Accessible names/states for icon buttons, wishlist, quantity, carousel, filters, accordions, and drawers.
- Announce cart/result updates through appropriate live regions without excessive noise.
- Alt text for meaningful media; decorative media ignored.
- Text resizes to 200% without loss; reflow at 320 CSS px.
- Colour is not the only indicator of stock, discount, error, or selection.
- Captions/transcripts for meaningful video/audio.
- Reduced-motion support and no unsafe flashing.
- Automated axe checks plus manual keyboard and screen-reader testing (NVDA/VoiceOver).

## 33. Error handling and resilience

- Categorize validation, authentication, authorization, conflict, rate-limit, dependency, timeout, and unknown errors.
- Provide actionable, non-technical customer copy while logging diagnostic context by request ID.
- Retry only idempotent operations, with capped exponential backoff and jitter.
- Never automatically retry order/payment creation without idempotency protection.
- Circuit breakers/timeouts for payment, SMS, email, tax, shipping, and search providers.
- Queue notifications and non-critical integrations; commerce transactions must not fail merely because email is unavailable.
- Display a recoverable offline/poor-network state and retain safe checkout input.
- Payment result pages must distinguish failed, pending, and confirmed states.
- Global error page contains retry, home, cart, and support paths.

## 34. Logging, monitoring, and alerting

- Structured JSON logs with timestamp, environment, service, severity, request ID, route, latency, outcome, and safe actor ID.
- Never log passwords, OTPs, session tokens, card data, full addresses, raw gateway payload secrets, or unnecessary PII.
- Distributed tracing across API, worker, database, and external providers.
- Metrics: latency, error rate, throughput, saturation, queue lag, DB connections, cache hit rate, payment webhook delay, order mismatch, stock conflicts.
- Frontend error and performance monitoring with source maps protected.
- Alerts tied to actionable service-level objectives; avoid alert fatigue.
- Critical alerts: checkout failures, payment verification mismatch, webhook backlog, inventory oversell, elevated 5xx, database/storage failure.
- Audit logs are immutable, access-controlled, and searchable.

## 35. Analytics

Minimum commerce events:

- `view_item_list`, `select_item`, `view_item`.
- `search`, `filter_applied`, `sort_changed`, `zero_results`.
- `add_to_wishlist`, `add_to_cart`, `remove_from_cart`, `view_cart`.
- `begin_checkout`, `add_shipping_info`, `add_payment_info`.
- `purchase` fired only after confirmed order/payment rules; deduplicated by transaction ID.
- `refund`, `sign_up`, `login`, `bulk_enquiry_submit`.

Define event owner, trigger, properties, privacy classification, and validation test. Never send PII. Use server-side purchase/refund confirmation where practical. Maintain UTM attribution with consent-aware rules.

## 36. Testing strategy

### 36.1 Automated testing

- Unit tests: pricing display, validation, reducers/stores, formatters, state transitions.
- Component tests: forms, product cards, variant selector, cart, drawers, error states.
- API integration tests: database transactions, auth, permissions, coupons, inventory, order/payment idempotency.
- Contract tests against OpenAPI and payment/shipping adapters.
- End-to-end tests: browse/search/filter; guest/auth checkout; payment success/failure/pending; COD; cart merge; cancellation; return; admin fulfil/refund.
- Accessibility checks in component and E2E pipelines.
- Visual regression for core breakpoints and critical components.
- Load tests for catalogue, cart, checkout quote, order creation, and webhook bursts.
- Security tests for auth, access control, injection, CSRF, upload, rate limits, and webhook replay.

### 36.2 Test data and payment simulation

- Separate sandbox accounts and keys.
- Seeded products representing simple/variant, discount, out-of-stock, low-stock, non-returnable, heavy shipping, and COD-ineligible cases.
- Deterministic gateway fixtures for success, failure, timeout, delayed webhook, duplicate webhook, and refund.
- No production PII in non-production environments.

### 36.3 Release gates

- Lint, format, type check, unit/integration, build, dependency/security scan, accessibility smoke, and critical E2E tests pass.
- No open critical/high security issue without documented approval.
- Performance budgets pass or have an approved exception.
- Database migrations tested forward and through documented recovery.

## 37. Deployment and infrastructure

- Environments: local, test/preview, staging, production.
- Frontend deployed to CDN/edge hosting; API/worker deployed to managed containers or platform service.
- Managed PostgreSQL with point-in-time recovery; managed Redis if used.
- Infrastructure as code.
- CI/CD with immutable artifacts, environment approvals, health checks, and automated rollback.
- Blue/green or rolling deployment for backend; backward-compatible API/database changes.
- Separate credentials and data per environment.
- CDN/WAF/rate limiting at the edge.
- Domain, TLS, SPF/DKIM/DMARC, payment webhook URLs, and notification sender identities configured before launch.
- Scheduled backups with documented RPO ≤ 24 hours and RTO ≤ 4 hours initially; tighten if business needs demand.
- Quarterly restore drill and dependency/provider failover review.

## 38. Environment variables

Example names only; values must come from secure environment/secret management.

### Frontend (public by design)

```dotenv
VITE_APP_ENV=
VITE_PUBLIC_SITE_URL=
VITE_API_BASE_URL=
VITE_CDN_BASE_URL=
VITE_PAYMENT_PROVIDER_PUBLIC_KEY=
VITE_SENTRY_DSN=
VITE_ANALYTICS_ID=
VITE_CONSENT_MANAGER_ID=
VITE_SUPPORT_PHONE_PUBLIC=
```

### Backend (secret unless explicitly public)

```dotenv
NODE_ENV=
PORT=
APP_BASE_URL=
DATABASE_URL=
REDIS_URL=
SESSION_SECRET=
FIELD_ENCRYPTION_KEY=
PAYMENT_PROVIDER_KEY_ID=
PAYMENT_PROVIDER_KEY_SECRET=
PAYMENT_WEBHOOK_SECRET=
OBJECT_STORAGE_BUCKET=
OBJECT_STORAGE_REGION=
OBJECT_STORAGE_ACCESS_KEY=
OBJECT_STORAGE_SECRET_KEY=
CDN_BASE_URL=
EMAIL_PROVIDER_API_KEY=
EMAIL_FROM=
SMS_PROVIDER_API_KEY=
SMS_SENDER_ID=
SHIPPING_PROVIDER_API_KEY=
SENTRY_DSN=
OTEL_EXPORTER_OTLP_ENDPOINT=
ANALYTICS_SERVER_SECRET=
```

Rules:

- Only the frontend prefix is included in browser bundles.
- Validate required variables on startup and fail safely.
- Rotate secrets; never print them in logs.
- Maintain a redacted `.env.example`; never commit real `.env` files.

## 39. Non-functional requirements

| Area | Requirement |
|---|---|
| Availability | 99.9% monthly target for core storefront and ordering |
| Scalability | Horizontally scalable stateless API/worker; catalogue caching; queues for bursts |
| Consistency | Strong consistency for inventory reservation, order creation, payment transition, refund |
| Maintainability | Strict typing, documented modules, code ownership, ADRs, automated quality gates |
| Portability | Provider adapters for payment, shipping, email/SMS, search, and storage |
| Usability | Common purchase path understandable without training; errors explain recovery |
| Localization | INR/Indian numbering, Asia/Kolkata presentation, extensible message catalogue |
| Supportability | Request IDs, audit trails, admin search, runbooks, dashboards, alert routing |
| Data integrity | Transactional writes, unique provider events, reconciliation, immutable money snapshots |
| Compatibility | Latest two major versions of supported modern browsers; graceful degradation |
| Disaster recovery | Encrypted backups, restore tests, documented RPO/RTO and incident roles |

## 40. Milestones

Assumes a cross-functional team and iterative delivery; estimates must be refined after design and provider selection.

### Milestone 0 — Discovery and foundations (1–2 weeks)

- Confirm business rules, catalogue shape, fulfilment, GST/invoice, return, COD, and bulk-order policy.
- Select hosting, payment, shipping, notifications, analytics, and search approach.
- Produce design system, API conventions, data model, threat model, and delivery plan.

### Milestone 1 — Storefront and catalogue (2–3 weeks)

- App shell, routing, responsive design system.
- Homepage, listing, product detail, search/filter/sort.
- Catalogue/admin read foundation, SEO metadata, accessibility baseline.

### Milestone 2 — Identity, cart, wishlist (2 weeks)

- Auth/account/address flows.
- Guest and persistent cart, merge logic, wishlist, pricing/inventory validation.

### Milestone 3 — Checkout and payment (2–3 weeks)

- Address/serviceability, delivery, coupons, totals.
- Gateway sandbox, COD rules, order creation, webhook verification, notifications.

### Milestone 4 — Orders and admin operations (2–3 weeks)

- Customer order history/tracking/invoice/cancellation.
- Admin catalogue, inventory, fulfilment, refund, returns, roles, audit.

### Milestone 5 — Hardening and launch (2 weeks)

- Security, accessibility, performance, SEO, analytics, load and E2E testing.
- Monitoring, backups, runbooks, content/legal review, UAT, production rehearsal.

### Milestone 6 — Post-launch stabilization (1–2 weeks)

- Monitor real-user metrics and funnel.
- Resolve launch defects, tune search/performance, reconcile first payments/orders.
- Prioritize evidence-based enhancements.

## 41. Acceptance criteria

### 41.1 Storefront

- A user can browse products by category, collection, search, filter, and supported sort options on mobile and desktop.
- Catalogue state is shareable through the URL and survives back/forward navigation.
- Product pages show accurate variant, price, stock, delivery, policy, and media data.
- Loading, error, empty, out-of-stock, and discontinued states are complete and accessible.

### 41.2 Cart and wishlist

- Guest cart survives refresh; customer cart survives devices/sessions according to policy.
- Guest-to-customer cart merge is deterministic and reports changes.
- Quantity, price, promotion, stock, and shipping rules are revalidated server-side.
- Wishlist add/remove/move-to-cart works with appropriate authentication behaviour.

### 41.3 Authentication

- Register/login/logout/recovery or OTP workflows pass happy, invalid, expired, throttled, and abuse cases.
- Sessions use secure cookie settings and rotate appropriately.
- A customer cannot access another customer's profile, addresses, orders, invoices, or wishlist.
- Admin routes and APIs enforce RBAC and MFA.

### 41.4 Checkout and payment

- A serviceable Indian address can complete checkout; invalid/unserviceable PIN codes receive clear guidance.
- The displayed final total equals the server-created order total.
- Duplicate clicks/requests/webhooks never create duplicate payable orders or captures.
- Payment success is accepted only after server verification.
- Failed, cancelled, delayed, and pending payments lead to correct recoverable states.
- COD is shown only when eligible.

### 41.5 Orders and operations

- Confirmed orders create immutable item/address/money snapshots and inventory records.
- Customers receive confirmation and can view authorized order details.
- Admin can safely progress fulfilment, cancel where eligible, process returns, and initiate refunds with audit history.
- Shipment tracking and invoice access are authorization-protected.
- Reconciliation identifies provider/order mismatches.

### 41.6 Quality

- Critical journeys pass on supported browsers and target breakpoints.
- WCAG 2.2 AA automated checks show no serious/critical issues, and manual keyboard/screen-reader tests pass critical journeys.
- Core Web Vitals and API p95 targets meet the stated budgets under agreed test conditions.
- Critical/high security issues are closed or formally risk-accepted.
- Monitoring, alerts, backup restore, rollback, webhook replay, and incident procedures are demonstrated before launch.

## 42. Launch checklist

- Products, variants, SKUs, stock, prices, MRP, GST, HSN, media, and policies approved.
- Terms, privacy, shipping, cancellation, return/refund, warranty, and grievance information published.
- Production payment account/KYC, webhook signing, refund permissions, and reconciliation verified.
- Courier serviceability, rates, labels, tracking, COD remittance, and return pickup verified.
- Transactional email/SMS templates and sender identities approved.
- DNS, TLS, redirects, sitemap, robots, canonical tags, and structured data verified.
- Consent and analytics event validation complete.
- Admin roles, MFA, escalation contacts, and support workflows active.
- Dashboards, alerts, logs, backups, restore, rollback, and status communication tested.
- Small controlled live transaction and refund completed end-to-end.

## 43. Future scope

- Native or progressive web app features, including opt-in push notifications.
- Loyalty points, referrals, gift cards, subscriptions, and prepaid bundles.
- Multi-language support (for example Hindi and Marathi) using a message catalogue from day one.
- Advanced product comparison and compatibility checker.
- AI-assisted product discovery with human-reviewed product data and clear fallback.
- Personalized recommendations and lifecycle messaging with consent.
- Marketplace/multi-vendor capabilities.
- Multi-warehouse routing and demand forecasting.
- International shipping, currencies, and tax.
- B2B accounts, quotations, purchase orders, credit terms, and approval workflows.
- Learning portal integration, course enrolments, downloadable entitlements, and kit-to-course bundles.
- WhatsApp transactional support through approved templates and consent.
- Headless CMS and experimentation platform with performance/SEO guardrails.

## 44. Decisions required before development

1. SPA/Vite versus SSR-capable React framework based on SEO priority.
2. Payment provider and exact enabled methods.
3. Shipping aggregator/courier and PIN-code/COD rules.
4. Guest checkout and mobile OTP policy.
5. GST price display, invoice, credit-note, and HSN rules after professional review.
6. Inventory reservation timing and timeout.
7. Return eligibility by product category.
8. Search engine threshold and relevance ownership.
9. CMS requirement and content-owner workflow.
10. Production SLOs, traffic forecast, data retention, RPO, and RTO.

---

## Appendix A — Definition of done for a feature

A feature is done when requirements and UX are approved; responsive UI, API, validation, permissions, analytics, logging, accessibility, empty/loading/error states, tests, documentation, and operational considerations are complete; migrations are safe; security/privacy implications are reviewed; and acceptance criteria pass in staging.

## Appendix B — Recommended engineering artifacts

- Product requirements and prioritized backlog.
- Figma design system and responsive flows.
- OpenAPI specification.
- Entity relationship diagram.
- Payment and order state-machine diagrams.
- Architecture decision records.
- Threat model and data-flow diagram.
- Analytics tracking plan.
- Test strategy and traceability matrix.
- Deployment, rollback, payment reconciliation, refund, incident, and disaster-recovery runbooks.

