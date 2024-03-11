
![Logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVUaYxIv5wOUt41NjNqnc6rKXhbGDlCR42Q&usqp=CAU)


# Frontend Argentina 🇦🇷

Proyecto desarrollado con Vite + Typescript




## Installation

Install my-project with npm

```bash
  npm create vite@latest
  cd my-project
  npm install

```
    
## Run this project locally

Clonar este repositorio

```bash
  git clone https://repositorio
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Environment Variables

Para correr el proyecto de manera local se deben agregar las variables de entorno.
En VITE se declaran asi: 

`VITE_REACT_APP_COUNTRY`

`VITE_REACT_APP_DOMINIO`

`VITE_REACT_APP_API_PRODUCTOS`

`VITE_REACT_APP_API_CATEGORIES`

Ejemplo de modo de uso: 

console.log(import.meta.env.VITE_REACT_APP_API_COUNTRY)




## Estructuras y patrones de diseño

![App Screenshot](https://i.postimg.cc/1thhsmJT/estructura.png)


## Test mock API para los llamados con instancia de axios

#### Obtener todos los productos (reemplazar por endpoints reales)

```http
  GET https://fakestoreapi.com/products
```



#### Obtener todas las categorias (reemplazar por endpoints reales)

```http
  GET https://fakestoreapi.com/products/categories
```




## Usage/Examples types e interfaces

```typescript
// Declaracion interface
interface NavLinkInterface {
   route: string;
   label: string;
}

// Uso
const navLink: NavLinkInterface = {
    route: "/about",
    label: "Acerca de nosotros"
};


// Declaracion type
type NavLinkType = {
   route: string;
   label: string;
}

// Uso
const navLink: NavLinkType = {
    route: "/about",
    label: "Acerca de nosotros"
};


```

## Paleta de colores (reemplazar por paleta real)

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Red | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Black | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |



## Deployment



```bash
  npm run build
```


## Enlaces utiles

[Vite](https://vitejs.dev/)

[Typescript](https://www.typescriptlang.org/docs/)

[Tailwind CSS](https://tailwindcss.com/)

[ZOD](https://zod.dev/)

[React Hook Forms](https://react-hook-form.com/)

[Axios](https://axios-http.com/es/docs/intro)



## Authors

- [@leon2192](https://www.github.com/leon2192)

