### About

- This application was created while learning React.js.
- This application is designed to generate colors in HEX format.
- The application can be tested from the [link](https://s1een.github.io/react-color-app/ "link").

# React Menu App

![](https://github.com/s1een/react-color-app/blob/master/public/images/img.PNG?raw=true)

## Technologies used in the development:

- [![React][react.js]][react-url]
- [![npm][npm.com]][npm-url]

## React

The app was built in React v.18.2.0.

`$ npx create-react-app react-grocery-bud-app`

## App Component

States:

```javascript
const [color, setColor] = useState("");
const [count, setCount] = useState(10);
const [error, setError] = useState(false);
const [list, setList] = useState(new Values("#774d96").all(10));
```

Generate Collor:

```javascript
function handleSubmit(e) {
  e.preventDefault();
  try {
    let colors;
    if (+count > 0 && count <= 100) {
      colors = new Values(color).all(+count);
    } else {
      colors = new Values(color).all(10);
    }
    setList(colors);
    setCount(0);
  } catch (error) {
    console.log(error);
    setError(true);
  }
}
```

Render:

```javascript
return (
  <>
    <section className="container">
      <h3>Color Generator</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#774d96"
          className={`${error ? "error" : ""}`}
        />
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          className={`${error ? "error" : ""}`}
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </section>
    <section className="colors">
      {list.map((singleColor, index) => (
        <SingleColor key={index} {...singleColor} index={index} />
      ))}
    </section>
  </>
);
```

## Single Color Component

States:

```javascript
const [alert, setAlert] = useState(false);
const bcg = rgb.join(",");
const hex = rgbToHex(...rgb);
```

Copy Collor:

```javascript
function handleClick() {
  setAlert(true);
  navigator.clipboard.writeText(hex);
}
```

Render:

```javascript
return (
  <article
    onClick={handleClick}
    className={`color ${index > 10 && "color-light"}`}
    style={{ backgroundColor: `rgb(${bcg})` }}
  >
    <p className="percent-value">{weight}%</p>
    <p className="color-value">{hex.toUpperCase()}</p>
    {alert && <p className="alert">Copied to clipboard</p>}
  </article>
);
```

## Acknowledgments

Resources that helped me in development.

- [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
- [Malven's Grid Cheatsheet](https://grid.malven.co/)
- [Img Shields](https://shields.io)
- [GitHub Pages](https://pages.github.com)
- [Font Awesome](https://fontawesome.com)
- [React Icons](https://react-icons.github.io/react-icons/search)

## My Links

- [![linkedin][linkedin.com]][linkedin-url]
- [![telegram][telegram.com]][telegram-url]
- [![portfolio][portfolio.com]][portfolio-url]
  <!-- MARKDOWN LINKS & IMAGES -->
  <!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
  [product-screenshot]: images/main.png
  [react.js]: https://img.shields.io/badge/React_18.2.0-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
  [react-url]: https://reactjs.org/
  [npm.com]: https://img.shields.io/badge/NPM-20232A?style=for-the-badge&logo=npm&logoColor=764abc
  [npm-url]: https://www.npmjs.com/
  [linkedin.com]: https://img.shields.io/badge/LinkedIn-20232A?style=for-the-badge&logo=linkedin&logoColor=wgute
  [linkedin-url]: https://www.linkedin.com/in/dmitry-morozov-082288228/
  [telegram.com]: https://img.shields.io/badge/Telegram-20232A?style=for-the-badge&logo=telegram&logoColor=white
  [telegram-url]: https://t.me/r3ason_why
  [portfolio.com]: https://img.shields.io/badge/Portfolio-20232A?style=for-the-badge&logo=github&logoColor=white
  [portfolio-url]: https://s1een.github.io/my_cv_site/
