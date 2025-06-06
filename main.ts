//% color=#0099CC icon="😀" block="Personajes"
namespace Personajes {
    export interface Personaje {
        nombre: string
        salud: number
        nivel: number
    }

    let personajesMemoria: { [nombre: string]: Personaje } = {}

    //% block="crear personaje con nombre %nombre salud %salud nivel %nivel"
   //% block="crear personaje con nombre %nombre salud %salud nivel %nivel"
export function crearPersonaje(nombre: string, salud: number, nivel: number): void {
    personajesMemoria[nombre] = { nombre: nombre, salud: salud, nivel: nivel }

    // Crear sprite visual con imagen vacía
    let personajeSprite = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
}

    }

    //% block="leer salud de %nombre"
    export function leerSalud(nombre: string): number {
        if (personajesMemoria[nombre]) {
            return personajesMemoria[nombre].salud
        }
        return 0
    }

    //% block="leer nivel de %nombre"
    export function leerNivel(nombre: string): number {
        if (personajesMemoria[nombre]) {
            return personajesMemoria[nombre].nivel
        }
        return 0
    }

    //% block="actualizar salud de %nombre a %salud"
    export function actualizarSalud(nombre: string, salud: number): void {
        if (personajesMemoria[nombre]) {
            personajesMemoria[nombre].salud = salud
        }
    }

    //% block="actualizar nivel de %nombre a %nivel"
    export function actualizarNivel(nombre: string, nivel: number): void {
        if (personajesMemoria[nombre]) {
            personajesMemoria[nombre].nivel = nivel
        }
    }

    //% block="borrar personaje %nombre"
    export function borrarPersonaje(nombre: string): void {
        if (personajesMemoria[nombre]) {
            delete personajesMemoria[nombre]
        }
    }

    //% block="borrar todos los personajes"
    export function borrarTodos(): void {
        personajesMemoria = {}
    }
}
