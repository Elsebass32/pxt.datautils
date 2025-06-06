// Diccionario para almacenar los personajes por nombre
let personajesMemoria: { [nombre: string]: { nombre: string, salud: number, nivel: number } } = {}

//% weight=100 color=#0fbc11 icon="🧍‍♂️"
//% block="Personajes"
namespace personajes {
    
    //% block="crear personaje con nombre %nombre salud %salud nivel %nivel"
    export function crearPersonaje(nombre: string, salud: number, nivel: number): void {
        personajesMemoria[nombre] = { nombre: nombre, salud: salud, nivel: nivel }

        // Crear un sprite vacío cuando se crea el personaje
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

    //% block="leer salud de %nombre"
    export function leerSalud(nombre: string): number {
        return personajesMemoria[nombre]?.salud || 0
    }

    //% block="leer nivel de %nombre"
    export function leerNivel(nombre: string): number {
        return personajesMemoria[nombre]?.nivel || 0
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
        delete personajesMemoria[nombre]
    }

    //% block="borrar todos los personajes"
    export function borrarTodos(): void {
        personajesMemoria = {}
    }
}
