//url da imagem que queremos
var listaAnime = [
    "https://upload.wikimedia.org/wikipedia/pt/f/ff/One_Piece_vol._01.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/9138832mxKL.jpg",
    "https://static.wikia.nocookie.net/shingekinokyojin/images/a/a5/Attack_on_Titan_Season_2_Official_Poster.png",
    "https://br.web.img3.acsta.net/pictures/19/09/18/13/46/0198270.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/71Y3VwgXuTL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/81ChrAxeazL.jpg",
    "https://img1.ak.crunchyroll.com/i/spire4/5568ffb263f6bcba85a639980b80dd9a1612993223_full.jpg",
    "https://ae01.alicdn.com/kf/HTB1aXzGHVXXXXc3XXXXq6xXFXXXE/0085-Frete-Gr%C3%A1tis-Naruto-Shippuden-Elenco-TV-poster-enviado-em-tubo-de-12X18-arte-da-parede.jpg",
    "https://animesbr.biz/wp-content/uploads/2019/07/f2zhRLqwRLrKhEMeIM7Z5buJFo3.jpg",
    "https://img1.ak.crunchyroll.com/i/spire3/98ea4207e23a2ea3e3af39ad641d88001533322009_full.jpg",
    "https://images.justwatch.com/poster/39456301/s718/vuaioretsutoevuagaden.%7Bformat%7D"
  ];
  
  //i = indice
  // tag <img src=> para imagens
  for (var i = 0; i < listaAnime.length; i++) {
    document.write("<img src=" + listaAnime[i] + ">");
  }
  