const serverHandler = function (req, res)
{
console.log(req);
const url = req.url;
switch (url)
{
    case '/':
{
res.setHeader('Content-Type', 'text/html');
res.write(
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>First App NodeJs</title>
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
</head>
<body class="bg-dark text-light">
    <header>
    <nav class="navbar navbar-expand-lg bg-secondary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">First App NodeJs</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/values">Mis Valores</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/skills">Mis Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  href="/projects">Mis Proyectos</a>
        </li>
          <li class="nav-item">
          <a class="nav-link"  href="/contact">Contactame</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>
<main>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <img src="https://media.licdn.com/dms/image/v2/D4E03AQFYi7i41bUOrg/profile-displayphoto-scale_400_400/B4EZoiF3nrIwAg-/0/1761508558868?e=1764201600&v=beta&t=1In8UoyX63VuveIx4UT8cukonI16slphdGDsudnFEJk" alt="" class="rounded mx-auto d-block">
                <h1 class="mt-3 text-center">Acerca de Mi</h1>
<p class="mt-3">Soy una persona apasionada por la programación, la tecnología y la informática aplicada. Me motiva aprender constantemente sobre nuevos lenguajes, herramientas y metodologías de desarrollo. Disfruto diseñar proyectos prácticos, dinámicos e interactivos que representen desafíos reales y mejoren mis habilidades como programador.</p>

<p>Me interesa desarrollar proyectos educativos y tecnológicos, como simuladores, sistemas interactivos y aplicaciones que faciliten el aprendizaje o la productividad. Actualmente estoy profundizando en C#, Java, desarrollo web y Node.js, además de explorar continuamente nuevas tecnologías y paradigmas de programación.</p>

<p>Soy una persona curiosa, paciente y comprometida con la mejora continua, siempre buscando crecer como desarrollador y ampliar mis conocimientos en el mundo del software.</p>


            </div>
        </div>
    </div>
</main>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.min.js" integrity="sha384-G/EV+4j2dNv+tEPo3++6LCgdCROaejBqfUeNjuKAiuXbjrxilcCdDz6ZAVfHWe1Y" crossorigin="anonymous"></script>
</html>`
);
res.end();
break;
}
case '/values':
    res.setHeader('Content-Type', 'text/html');
res.write(
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>First App NodeJs</title>
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
</head>
<body class="bg-dark text-light">
    <header>
    <nav class="navbar navbar-expand-lg bg-secondary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">First App NodeJs</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Mis Valores</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/skills">Mis Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-disabled="true" href="/projects">Mis Proyectos</a>
        </li>
          <li class="nav-item">
          <a class="nav-link" aria-disabled="true" href="/contact">Contactame</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>
    <main>
      <div class="container">
        <div class="row text-center mt-5">
<div class="card" >
  <div class="card-header">
<h2>Mis Valores</h2>
  </div>
  <ul class="list-group list-group-flush">
              <li class="list-group-item">Responsabilidad</li>
       <li class="list-group-item">Disciplina</li>
       <li class="list-group-item">Aprendizaje continuo</li>
       <li class="list-group-item">Creatividad</li>
       <li class="list-group-item">Trabajo en equipo</li>
       <li class="list-group-item">Adaptabilidad</li>
       <li class="list-group-item">Compromiso con la calidad</li>
  </ul>
</div>
        </div>
      </div>
    </main>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.min.js" integrity="sha384-G/EV+4j2dNv+tEPo3++6LCgdCROaejBqfUeNjuKAiuXbjrxilcCdDz6ZAVfHWe1Y" crossorigin="anonymous"></script>
</html>`
);
res.end();
break;
case '/skills':
   res.setHeader('Content-Type', 'text/html');
res.write(
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>First App NodeJs</title>
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
</head>
<body class="bg-dark text-light">
    <header>
    <nav class="navbar navbar-expand-lg bg-secondary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">First App NodeJs</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/values">Mis Valores</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Mis Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-disabled="true" href="/projects">Mis Proyectos</a>
        </li>
          <li class="nav-item">
          <a class="nav-link" aria-disabled="true" href="/contact">Contactame</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>
    <main>
        <div class="container">
            <div class="row mt-5">

    
            <h1 class="text-center mb-3">Mis Skills</h1>
            <table class="table table-striped">
                <tr>
                    <th>Skill</th>
                    <th>Rating 1-5</th>
                </tr>
                <tr>
                    <td>C#</td>
                    <td>4</td>
                </tr>
                 <tr>
                    <td>SQL</td>
                    <td>4</td>
                </tr>
                  <tr>
                    <td>Python</td>
                    <td>3</td>
                </tr>
            </table>
                    </div>
        </div>
    </main>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.min.js" integrity="sha384-G/EV+4j2dNv+tEPo3++6LCgdCROaejBqfUeNjuKAiuXbjrxilcCdDz6ZAVfHWe1Y" crossorigin="anonymous"></script>
</html>`
);
res.end();
break;
 case '/projects':
    res.setHeader('Content-Type', 'text/html');
    res.write(
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>First App NodeJs</title>
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
</head>
<body class="bg-dark text-light">
    <header>
    <nav class="navbar navbar-expand-lg bg-secondary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">First App NodeJs</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/values">Mis Valores</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/skills">Mis Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-disabled="true" href="#">Mis Proyectos</a>
        </li>
          <li class="nav-item">
          <a class="nav-link" aria-disabled="true" href="/contact">Contactame</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>
    <main>
        <section>
        <h1 class="text-center mt-5">Projects</h1>
        <div class="container">
<div class="row mt-5 g-5">
    <div class="col">
        <div class="card  bg-secondary text-light">
            <div class="card-header ">   <h4 class="card-title text-center">Real State App</h4></div>
  <img src="https://media.licdn.com/dms/image/v2/D4E22AQG4w_LcO5gJiQ/feedshare-shrink_2048_1536/B4EZkc_zVgKUAw-/0/1757128119072?e=1762387200&v=beta&t=631tbvpcDmcA9tetpbsnn6japwZvqAbIbmSSUEsnnwE" class="card-img-top" alt="..." >
  <div class="card-body">

    <p class="card-text">Este proyecto consiste en un sistema integral de gestión de propiedades inmobiliarias que permite a clientes, 
            agentes y administradores interactuar de manera segura y eficiente. Los clientes pueden explorar inmuebles, 
            filtrarlos por distintos criterios, marcar favoritos, comunicarse con agentes y dar seguimiento a ofertas; los 
            agentes gestionan propiedades y negocian directamente con los interesados; mientras que los administradores 
            supervisan usuarios, tipos de propiedades, ventas y mejoras del sistema.</p>
  </div>
</div>
    </div>
    <div class="col">
        <div class="card  bg-secondary text-light">
            <div class="card-header ">   <h4 class="card-title text-center">SocialShip</h4></div>
  <img src="https://media.licdn.com/dms/image/v2/D4E22AQEFnCoC7MK2GA/feedshare-shrink_2048_1536/B4EZjzE4MeGwA0-/0/1756424799965?e=1762992000&v=beta&t=by_Etw8Fbb3wXlR3vM45wpgtJeHRfCrvzhyNrb7gcHo" class="card-img-top" alt="..." style="object-fit: cover; height:265px;">
  <div class="card-body">

    <p class="card-text">Este proyecto fue una asignación de Programación 3, y uno de mis favoritos para desarrollar, porque combina una red social completa con el juego Battleship, formando un concepto único que yo llamé SocialShip.
    Los usuarios pueden iniciar partidas con amigos, colocar sus barcos en un tablero 12x12 respetando reglas de superposición y límites, y jugar por turnos. Cada ataque se valida automáticamente, mostrando aciertos en rojo y fallos en verde, garantizando que solo el jugador con el turno activo pueda realizar acciones.</p>
  </div>
</div>
    </div>
</div>
        </div>
     
</section>
    </main>  
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.min.js" integrity="sha384-G/EV+4j2dNv+tEPo3++6LCgdCROaejBqfUeNjuKAiuXbjrxilcCdDz6ZAVfHWe1Y" crossorigin="anonymous"></script>
</html>`
);
res.end();
break;
case '/contact':
    res.setHeader('Content-Type', 'text/html');
    res.write(
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>First App NodeJs</title>
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
</head>
<body class="bg-dark text-light">
    <header>
    <nav class="navbar navbar-expand-lg bg-secondary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">First App NodeJs</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/values">Mis Valores</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/skills">Mis Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-disabled="true" href="/projects">Mis Proyectos</a>
        </li>
          <li class="nav-item">
          <a class="nav-link active" aria-disabled="true" href="#">Contactame</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>
    <h1 class="text-center mt-4">Contact me</h1>
    <main>
        <section>
        <form action="" class="container mt-4  p-4 bg-secondary rounded">
            <div class="mb-3">
            <label class="form-label" for="name">Name:</label>
            <input class="form-control" type="text"  id="name" placeholder="Name">
            </div>
            <div class="mb-3">
              <label class="form-label" for="lastname">Last name: </label>
            <input class="form-control" type="text" id="lastname" placeholder="Last name">
            </div>
            <div class="mb-3">
               <label class="form-label" for="email">Email</label>
            <input class="form-control" type="email"  id="email" placeholder="Email">
            </div>
            <div class="mb-3">
               <label class="form-label" for="description">Description</label>
            <textarea class="form-control" type="text" id="description" placeholder="Description"></textarea>
            </div>
            <button class="btn btn-primary">Send</button>
        </form>
        </section>
    </main>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.min.js" integrity="sha384-G/EV+4j2dNv+tEPo3++6LCgdCROaejBqfUeNjuKAiuXbjrxilcCdDz6ZAVfHWe1Y" crossorigin="anonymous"></script>
</html>`
);
res.end();
break;
    default:
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>First App NodeJs</title>
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
</head>
<body class="bg-dark text-light">
    <header>
    <nav class="navbar navbar-expand-lg bg-secondary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">First App NodeJs</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/values">Mis Valores</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/skills">Mis Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-disabled="true" href="/projects">Mis Proyectos</a>
        </li>
          <li class="nav-item">
          <a class="nav-link" aria-disabled="true" href="/contact">Contactame</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>
    <main>
      <div class="d-flex justify-content-center mt-5">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/error-404-illustration-svg-download-png-5501655.png" alt="">
        </div>
    </main>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.min.js" integrity="sha384-G/EV+4j2dNv+tEPo3++6LCgdCROaejBqfUeNjuKAiuXbjrxilcCdDz6ZAVfHWe1Y" crossorigin="anonymous"></script>
</html>`);
        res.end();
        break;
}
};

export default serverHandler;