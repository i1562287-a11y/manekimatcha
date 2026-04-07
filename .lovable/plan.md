

# Переробка блоку ціноутворення

Замість старої системи з тірами (T1-T4, H1-H3) та калькулятором маржі — нова проста структура ціноутворення згідно наданого тексту.

## Що змінюється

### 1. Products.tsx — повна переробка
Замість тірних карток — дві продуктові картки з новим контентом:

**Matcha картка:**
- Заголовок: "Matcha — Shizuoka (Japan)"
- Опис: "Stone-ground tencha. Clean umami, vibrant green, stable in daily café service."
- Ціна: €155/kg (ex VAT), VAT 23%: €35.65, €190.65/kg (incl. VAT)
- Підтекст: "Designed for cafés: consistent taste, easy to work with, perfect for matcha lattes and iced drinks."

**Houjicha картка:**
- Заголовок: "Houjicha — Miyazaki (Japan)"
- Опис: "Roasted Japanese green tea. Warm, toasty, naturally low in caffeine."
- Ціна: €115/kg (ex VAT), VAT 23%: €26.45, €141.45/kg (incl. VAT)
- Підтекст: "Ideal for houjicha lattes and evening drinks. A unique addition to your menu with almost no competition in most cafés."

### 2. Pricing.tsx — замінити калькулятор на блок оплати
Замість margin calculator — секція "Payment options (Portugal)":
- MB Way
- Multibanco
- Credit / Debit Card
- Bank Transfer (IBAN)
- Invoice for B2B partners

### 3. Footer — оновити текст
Додати/оновити footer note:
- "All prices ex-works Lisbon warehouse."
- "MOQ: 1 kg."
- "Bulk orders (5+ kg) available on request."

## Стилістика
Зберігаємо існуючу естетику: cream/ink палітра, kanji watermarks, sharp corners, font-heading/font-body/font-mono-label класи. Цінова розбивка (ex VAT / VAT / incl VAT) виділяється великим шрифтом для основної ціни та дрібнішим для VAT деталей. Payment options — список з іконками або мінімальними бейджами.

