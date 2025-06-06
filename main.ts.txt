//% color=#FFA500 icon="" block="Datos"
namespace Datos {
    let memoria: { [clave: string]: string } = {}

    //% block="guardar %clave = %valor"
    export function guardar(clave: string, valor: string): void {
        memoria[clave] = valor
    }

    //% block="leer %clave"
    export function leer(clave: string): string {
        return memoria[clave] || ""
    }

    //% block="borrar todo"
    export function borrarTodo(): void {
        memoria = {}
    }
}
