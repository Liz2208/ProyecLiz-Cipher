# Cifrado César

## Índice

* [1. Info sobre proceso y desiciones de diseño](#1-Diseño)
* [2. Usuarios](#2-Usuarios)
* [3. Necesidades de usuarios](#3-necesidades)
* [4. Checklist](#4-checklist)

***

## 1. Diseño

Este chat esta diseñado basado en la experiencia que tengo sobre como se llevan actualmente las comunicaciones entre jueces y sus auxiliares dentro de una audiencia, ya que el auxiliar permanece en su oficina y el juez dentro de la sala y requiere apoyo para investigar ciertas cosas o para saber fechas proximas sobre su agenda para poder programar la siguiente. El diseño lo hice dinámico y facil de usar para no complicar la comunicación entre ambos.
https://www.figma.com/file/kSV90OWSDS1Dh6lKgerjHM/ChatLiz?node-id=0%3A1
![image](https://user-images.githubusercontent.com/108889788/182461246-2f537455-fcfa-403f-84e4-5843d17530f5.png)


## 2. Usuarios

Esta app esta diseñada especialmente para mantener la comunicación entre jueces, auxiliares y personal que se encuentra fuera de la sala para dar apoyo a los jueces ya que ellos no tienen otro tipo de comunicación dentro de la sala de jucios orales y es necesario estar comunicados con el juez para dar fechas de audiencia, salas, o revisar las notificaciones o cualquier otro tipo de informacion requerida.

## 3. Necesidades de usuarios

En algunas salas de juicios orales, el imputado permanece detras de la auxiliar de sala ya que ahi se encuentran las rejillas de prácticas, con esto el imputado (detenido) puede ver lo que la auxiliar escribe o revisa en su maquina si ella llega a levantarse de su lugar para pasar algun testigo, o mover algun microfono, etc, no hay forma de que el imputado en estos casos no vea la pantalla, por eso es necesario un chat con cifrado para que solo la auxiliar y el juez puedan verlo una vez que den clic en el boton "decifrar" y con esto ayudamos a que el imputado no vea los mensajes que se estan enviando en ese momento entre la auxiliar y el juez que está de frente a todo el público.


## 4. Checklist

Esta sección está para ayudarte a llevar un control de lo que vas completando.

### Parte Obligatoria

* [hecho ] `README.md` incluye info sobre proceso y decisiones de diseño.
* [hecho ] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [hecho ] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [hecho] Usa VanillaJS.
* [hecho ] Implementa `cipher.encode`.
* [hecho ] Implementa `cipher.decode`.
* [hecho ] Pasa linter con configuración provista.
* [hecho ] Pasa pruebas unitarias.
* [hecho ] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [hecho ] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [hecho ] Interfaz permite escribir un texto para ser cifrado.
* [hecho ] Interfaz muestra el resultado del cifrado correctamente.
* [hecho ] Interfaz permite escribir un texto para ser descifrado.
* [ hecho] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"

* [hecho ] Cifra/descifra minúsculas
* [ ] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [ ] Permite usar un `offset` negativo.
