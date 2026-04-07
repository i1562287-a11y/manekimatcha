

# Фотогалерея: ферми, люди, якість матча

## Unsplash фото (рекомендації)

Конкретні фото з Unsplash для використання:

1. **Чайні ряди / ферма Shizuoka** — `https://images.unsplash.com/photo-1545048702-79362596cdc9` (зелені ряди чаю, Японія)
2. **Збір чаю вручну** — `https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9` (фермер на чайній плантації)
3. **Яскравий матча порошок (якість)** — `https://images.unsplash.com/photo-1515823064-d6e0c04616a7` (close-up зеленого порошку матча)
4. **Матча латте / приготування** — `https://images.unsplash.com/photo-1536256263959-770b48d82b0a` (chasen, чашка матча)
5. **Традиційна церемонія** — `https://images.unsplash.com/photo-1558618666-fcd25c85f82e` (японська чайна церемонія)

## Де вставити

### 1. Hero — фото замість тексту або поруч з Product Passport
Правий стовпець Hero зараз — темна панель зі специфікаціями. Додамо **фото чайної ферми як background-image** за Product Passport панеллю (overlay з opacity), щоб створити глибину.

### 2. Новий компонент `Gallery.tsx` — між WhySection та Products
Повноширинна секція з 3-4 фото в сітці, Pinterest-стиль:
- Фото ферми (горизонтальне, широке)
- Фермер за роботою (вертикальне)
- Close-up матча порошку (квадратне) — показує колір/якість
- Приготування матча (вертикальне)

Сітка: CSS grid з різними `row-span` для Pinterest-ефекту. Підписи під кожним фото (font-mono-label, xs, tracking-widest).

### 3. Матча vs погана матча — блок порівняння якості
Всередині Gallery або як окремий підблок: два фото поряд з підписами:
- "Ceremonial grade — vivid jade green" (Unsplash фото яскравої матча)
- "Low grade — dull yellow-green" (darker/yellower unsplash фото)

Це покаже що ми розуміємось на якості.

## Що змінюється (файли)

### 1. `src/components/maneki/Gallery.tsx` — новий компонент
- Секція "From the farm" з Pinterest-style grid
- 4-5 Unsplash фото з `?w=800&q=80` для оптимізації
- Кожне фото: `<img>` з `object-cover`, підпис знизу
- Блок порівняння якості (good vs bad matcha) з анотаціями
- `useFadeUp` анімація

### 2. `src/components/maneki/Hero.tsx` — додати background
- Фото чайної ферми як фонове зображення правої панелі з `bg-cover` та dark overlay

### 3. `src/pages/Index.tsx` — додати Gallery
- Імпорт та розміщення `<Gallery />` між `<WhySection />` та `<Products />`

## Стилістика
Sharp corners, cream/ink палітра. Фото без border-radius. Підписи font-mono-label uppercase. Kanji watermark на секції.

