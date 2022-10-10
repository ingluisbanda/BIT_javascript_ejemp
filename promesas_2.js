let desarrollo = new Promise((resolve, reject) => {
    // Acciones necesarias para conseguir un resultado satisfctorio
    // resolve: Satisfactorio
    // reject: Rechazado

    const aprobado = "Cumple las condiciones";
    const rechazado = "No satisfactorio"

    /*setTimeout: Tiempo de espera  */

    setTimeout(()=> {
        const proyecto = aprobado;
        let aleatorio = Math.random();
        if (aleatorio < 0.4) {
            resolve(proyecto);
        }
        else {
            reject(rechazado)
        }
    }, 1500)
})

desarrollo
.then((proyecto)=> alert(proyecto))         /* resolve */
.catch((error)=> alert(error))              /* reject */
.finally(()=>alert("Promesa Finalizada"))   /* finalizado */

