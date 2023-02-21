export const gatos = [
    "/images/cat-one.jpg",
    "/images/cat-two.jpg",
    "/images/cat-tree.jpg",
    "/images/cat-seven.jpg",
    "/images/cat-eight.jpg",
    "/images/cat-ten.jpg",
    
   

].flatMap((image) => [`aª${image}`, `bª${image}`]).sort(() => Math.random() - 0.5);

export const frontImg ="https://img.freepik.com/vector-premium/icono-vector-gato-simbolo-silueta-gato-signo-estilo-lineal-concepto-movil-diseno-web-casa-animales-simbolo-logotipo-ilustracion-vector-graficos-vector-eps_114482-705.jpg"
