Установленные библиотеки:

```
node 18.15.0
npm 8.19.3

├── stylelint-config-clean-order@7.0.0
├── stylelint-config-standard-scss@14.0.0 // 15+ version not supports nove v18
├── stylelint-declaration-block-no-ignored-properties@2.8.0
└── stylelint@16.21.1
```

Кастомизировал конфиг библиотеки **stylelint-config-clean-order**,
вытащил все группы стилей из библиотеки и переделал.
Установил свой порядок для этих групп. Хотя четсно оставил бы дефолтный порятдок стилей как изначально в конфиге.
Да я теперь могу гибко настроись какой css свойство идёт после какого. Но это сложнее поддерживать. Хотелось бы просто периодически обновлять **stylelint-config-clean-order** до последней версии.

Чтобы быстро протестировать настроенный **StyleLint** на своём проекте:

1. установить глобально несколько библиотек

```bash
npm install -g \
   stylelint@16.21.1 \
   stylelint-config-standard-scss@14.0.0 \
   stylelint-config-clean-order@7.0.0 \
   stylelint-declaration-block-no-ignored-properties@2.8.0
```

2. Прогнать все стили в папке **src** проекта.
   Тут важно сослаться именно на этот конфиг, так как может по умолчанию взяться конфиг из **supercasino**

```bash
stylelint "src/**/*.{css,scss}" --fix --config /Users/_user_/Downloads/stylelintrc.js
```

3. Посмотреть логи в терминале, разочароваться и быстро удалить всё

```bash
npm uninstall -g \
   stylelint \
   stylelint-config-standard-scss \
   stylelint-config-clean-order \
   stylelint-declaration-block-no-ignored-properties
```
