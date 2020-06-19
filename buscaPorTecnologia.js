const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];

  exibeSeUsuarioUsaCSS(usuarios);


  function checaSeUsuarioUsaCSS(usuarios){
    for (let i = 0; i < usuarios.tecnologias.length; i++) {
      if(usuarios.tecnologias[i+1] =='CSS'){
          return true;
      }else{
        return false;
      }
    }
  }



  function exibeSeUsuarioUsaCSS(usuarios){
    for (let i = 0; i < usuarios.length; i++) {
      const  checkCSS = checaSeUsuarioUsaCSS(usuarios[i]);
      
      if(checkCSS == true){
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
      }

    }
  }

  exibeSeUsuarioUsaCSS(usuarios);