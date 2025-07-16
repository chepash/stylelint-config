## Установленные библиотеки:

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

### Чтобы быстро протестировать настроенный **StyleLint** на своём проекте:

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

### Можно не глобально весь проект прогонять через линтер, а просто форматировать в тех компонентах в которых работаете:

1. В IDE установить плагин Stylelint

2. В настройках плагина в IDE указать путь к глобальному конфигу со всеми плагинами на вашей машине (как видно я у себя еще **NVM** использую для переключения между версиями **node**)

```
Stylelint: Config File

/Users/_user_/.nvm/versions/node/v18.15.0/lib/node_modules
```

3. В настройках плагина в IDE указать путь к кастомному конфигу

```
Stylelint: Config File

/Users/_user_/Downloads/stylelintrc.js
```

4. Можно добавить автоматическое исправление в файле при сохранении. Пример добавления настроек для VS Code

```js
  "stylelint.validate": ["css", "less", "postcss", "scss"],

  "[scss]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": "explicit"
    },
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": "explicit"
    },
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
```

как видно у меня там еще **Prettier** установлен
