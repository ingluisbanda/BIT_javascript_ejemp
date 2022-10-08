let compras = "🛒";

/* La promesa en este caso, permite retrasar el tiempo de la ejecucion del
algoritmo. */

function hacerLaCompra(callback) {
    setTimeout(function(){
        compras += "📦";
        callback()
    }, 2000) /* 2000 milisegundos de retraso o 2 segundos */
    
}

/* Esta parte de abajo ejecuta a funcion callback 4 veces, una dentro
de otra, lo que permite que a cada 2 segundos se agregue un nuevo 
articulo (callback: Vuelve a llamar) */

hacerLaCompra (function(){
    alert(compras);
    hacerLaCompra (function(){
        alert(compras);
        hacerLaCompra (function(){
            alert(compras);
            hacerLaCompra (function(){
                alert(compras);
});
});
});
});


