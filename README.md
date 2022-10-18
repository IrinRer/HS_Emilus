## Задание

**Часть 1**

+ Необходимо реализовать боковое меню с разделами
+ В раздел Клиенты -> Список клиентов перенести реализацию страницы
Pages -> User list из демо проекта. Данные о пользователях получать по
api https://jsonplaceholder.typicode.com . Столбцы из демо можно
заменить на свои(на те поля которые приходят в апи)
+ Пока данные загружаются на экране должен крутиться лоадер
+ При нажатии на пользователя открывать страницу аналогичную
странице в демо Pages -> Setting (только вкладка Edit Profile). Подставить
данные выбранного пользователя. Поля также можно поменять на
подходящие
+ При нажатии на Save Changes имитировать отправку данных на сервер,
покрутить секунду лоадер и вернуться обратно на список пользователей

**Часть 2**

Реализовать простой 2д планировщик:

+ Сделать блок со списком объектов на выбор(это могут быть 2д
фотографии столов, стульев, перегородок)
+ Сделать доску на которое можно добавлять эти объекты и перемещать
их мышкой
+ Должна быть возможность сохранения расстановки в файл(сохранять id
объекта и его координаты)
+ Также должна быть возможность импорта этого файла с координатами и
отображения сохраненной расстановки

## Технологии

1. React
2. Redux
3. Less
4. Antd
5. Html2canvas

## Что было сделано 

1. Перевод сайта на русский язык. 

```
const RuLang = {
  antd: antdRuRU,
  locale: "ru",
  messages: {
    ...ruMsg,
  },
};
```

**RuLang** - объект конфигурации. 

**antdRuRU** - импортирую из antd

**ruMsg** - json файл

Затем в **AppLocale** передаю данную конфигурацию. 

```
const AppLocale = {
    en: enLang,
    zh: zhLang,
    fr: frLang,
    ja: jaLang,
    ru: ruLang
};
```
В **THEME_CONFIG** устанавливаю ``locale: ru``.
```
export const THEME_CONFIG = {
	navCollapsed: false,
	sideNavTheme: SIDE_NAV_LIGHT,
	locale: 'ru',
	navType: NAV_TYPE_SIDE,
	topNavColor: '#3e82f7',
	headerNavColor: '',
	mobileNav: false,
	currentTheme: 'light'
};
```

2. Перетаскивание объектов. 

**Сначала нужно нажать на объект, который вы хотите перетащить, затем он перейдет на другую доску, в которой вы можете его перемещать.**

Для этого я использовала события мыши: onMouseDown, onMouseMove, onMouseUp.

```
const onMouseDown = useCallback(
    (item) => {
      idRef.current = item.id;
      elementRef.current.style.position = "absolute";
      const onMouseMove = (event) => {
        position.x += event.movementX;
        position.y += event.movementY;
        const element = elementRef.current;
        if (element && element.className === "api-table") {
          element.style.transform = `translate(${position.x}px, ${position.y}px)`;
        }
        setPosition(position);
      };
      const onMouseUp = (event) => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        if (elementRef.current) {
          document.body
            .querySelector(".api-scheduler-board")
            .append(elementRef.current);
        }
        dispatch(
          schedulerTableAction({
            id: idRef.current,
            x: position.x,
            y: position.y,
          })
        );
      };
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },

    [position, dispatch]
  );
```

3. Доску, в которую вы переместили объект можно скачать в формате **.png**. 

Для этого я использую библиотеку html2canvas.

```
const exportAsImage = async (el, imageFileName) => {
    const canvas = await html2canvas(el);
    const image = canvas.toDataURL("image/png", 1.0);
    downloadImage(image, imageFileName);
  };
  const downloadImage = (blob, fileName) => {
    const fakeLink = window.document.createElement("a");
    fakeLink.style = "display:none;";
    fakeLink.download = fileName;

    fakeLink.href = blob;

    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);

    fakeLink.remove();
  };
  ```
  
  ## Как запустить 
  
  1. Клонируете репозиторий
  
  ``git clone https://github.com/IrinRer/HS_Emilus.git``
  
  2. Устанавливаете зависимости
  
  ``npm ci``
  
  3. Запускаете проект
  
  ``npm run dev``
  
