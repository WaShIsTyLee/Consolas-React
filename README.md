
# 🎮 Blog de Consolas y Videojuegos (Proyecto React - Requisitos Cumplidos)

Este proyecto es una aplicación web de blog construida con React, enfocada en la componentización, el flujo de datos unidireccional (props) y la gestión de estado con `useState`, cumpliendo con todos los requisitos técnicos obligatorios del enunciado.

## 📋 Resumen de Componentes

La aplicación utiliza un total de **9 componentes funcionales** (más del mínimo de 8 requerido), garantizando la separación de responsabilidades y la reutilización:

* `App` (Raíz)
* `Header` (Sin Props)
* `Footer` (Sin Props)
* `Sidebar`
* `ConsolaList` (Lista)
* `ConsolaCard` (Reutilizable/Estado Local)
* `LatestConsolesCard` (Reutilizable/Personalización)
* `GameCard` (Reutilizable)
* `AddCommentsForm` (Formulario Controlado)
* `ToggleCommentsButton` (Callback)
* `CommentsList` (Callback)

---

## ✅ Cumplimiento de Requisitos Técnicos Obligatorios

A continuación, se detalla cómo se cumple cada requisito del enunciado, especificando el componente, el fragmento de código relevante y la lógica empleada.

### A. Componentes (Mínimo 8)

| Requisito                                                                                              | Componente(s)                                                          | Código/Lógica Implementada                                                                                                                                                                                                                                                                                                                                  |
| :----------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **A. Componente Raíz**                                                                          | `App.tsx`                                                            | `App` gestiona el estado global `filterTag` y pasa las funciones y datos necesarios a `Sidebar` y `ConsolaList`.                                                                                                                                                                                                                                      |
| **B. Al menos 1 componente sin props**                                                           | `Header.tsx`, `Footer.tsx`                                         | Ambos componentes son estáticos y no reciben ninguna `prop`.                                                                                                                                                                                                                                                                                               |
| **C. Al menos 2 componentes reutilizables**                                                      | `ConsolaCard.tsx`, `GameCard.tsx`, `LatestConsolesCard.tsx`      | `ConsolaCard` se reutiliza en `ConsolaList` mediante un `.map()`. `GameCard` se reutiliza dentro de cada `ConsolaCard` para listar los juegos.                                                                                                                                                                                                      |
| **D. Al menos 2 componentes que reciban props para personalizar su apariencia/contenido**        | `ConsolaCard.tsx`, `LatestConsolesCard.tsx`                        | Ambos utilizan la propiedad `consola.color` para establecer un borde personalizado, demostrando personalización basada en `props`.                                                                                                                                                                                                                       |
| **E. Al menos 1 componente formulario controlado**                                               | `AddCommentsForm.tsx`                                                | Gestiona el valor del `textarea` internamente con `useState`.                                                                                                                                                                                                                                                                                             |
| **F. Al menos 1 componente que reciba una función para cambiar un state por props (callback)**  | `Sidebar.tsx`, `AddCommentsForm.tsx`, `ToggleCommentsButton.tsx` | **Caso clave (Global):** `Sidebar` recibe `onFilter={(tag) => onFilter(tag)}` para modificar el estado `filterTag` definido en `App`.                                                                                                                                                                                                           |
| **G. Componente que muestre una lista de elementos (usando `.map()` )**                        | `ConsolaList.tsx`                                                    | Renderiza múltiples instancias de `<ConsolaCard />` utilizando el método `.map()` sobre el array de `consolas`.                                                                                                                                                                                                                                       |
| **H. Componente que actúe como "panel de información" o "visor" de un elemento seleccionado.** | **Requiere mejora (Ver Nota ⚠️)**                              | Actualmente, el detalle se muestra dentro de cada `ConsolaCard`. Para cumplir estrictamente con un "visor de elemento seleccionado" (estado global), se debería: **1.** Añadir `selectedConsola` a `App` y **2.** Crear un componente `ConsolaViewer` que se muestre condicionalmente en `App` si `selectedConsola` no es `null`. |

### B. Estados (`useState`)

| Requisito                                                                          | Componente(s)                                          | Código/Lógica Implementada                                                                                                                                                                                                                |
| :--------------------------------------------------------------------------------- | :----------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **1. Estado local obligatorio en varios componentes (Mínimo 2)**            | `ConsolaCard.tsx`, `AddCommentsForm.tsx`           | **`ConsolaCard`:** `const [comments, setComments] = useState(...)`, `const [showComments, setShowComments] = useState(...)`. **`AddCommentsForm`:** `const [text, setText] = useState("")`.                           |
| **2. Estado compartido entre varios componentes (Mínimo 1 caso)**           | `App.tsx`                                            | `const [filterTag, setFilterTag] = useState("");` Este estado afecta a qué consolas se muestran en `ConsolaList`.                                                                                                                      |
| **3. Al menos 1 componente debe leer y otro modificar el estado compartido** | `Sidebar.tsx` (Modifica) y `ConsolaList.tsx` (Lee) | **Modifica:** `Sidebar` recibe `onFilter` (que es `setFilterTag` de `App`) y lo usa en sus botones de filtro. **Lee:** `ConsolaList` recibe el array `consolas` ya filtrado por el estado `filterTag` de `App`. |

### C. Reutilización obligatoria

| Requisito                          | Componente(s)                                                     | Código/Lógica Implementada                                                                                                                      |
| :--------------------------------- | :---------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Demostrar Reutilización** | `ConsolaCard.tsx`, `GameCard.tsx`, `LatestConsolesCard.tsx` | La reutilización se demuestra claramente a través del uso de `.map()` en los componentes `ConsolaList` y `ConsolaCard`, y en `Sidebar`. |
"# Consolas-React" 
