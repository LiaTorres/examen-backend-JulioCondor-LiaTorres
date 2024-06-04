function crearNavbar() {
  return `
  <div class="navbar bg-base-100">
  <div class="navbar-start">
    <a class="btn btn-ghost text-xl flex h-full mx-4" href="index.html">Consultorio <br/> Odontologico</a>
  </div>
  <div class="navbar-center hidden sm:flex gap-4">
    <div class="dropdown dropdown-hover">
      <div tabindex="0" role="button" class="btn m-1">Pacientes</div>
      <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="post_pacientes.html" >Agregar</a></li>
        <li><a href="get_pacientes.html">Listar</a></li>

      </ul>
    </div><div class="dropdown dropdown-hover">
      <div tabindex="0" role="button" class="btn m-1">Odontologos</div>
      <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="post_odontologos.html" >Agregar</a></li>
        <li><a href="get_odontologos.html">Listar</a></li>
      </ul>
    </div><div class="dropdown dropdown-hover">
      <div tabindex="0" role="button" class="btn m-1">Turnos</div>
      <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="post_turnos.html" >Agregar</a></li>
        <li><a href="get_turnos.html">Listar</a></li>
      </ul>
    </div>

  </div>

  <div class="navbar-end">
<div class="dropdown">
    <div tabindex="0" role="button" class="btn btn-ghost sm:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    </div>
    <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Item 1</a></li>
      <li>
        <a>Parent</a>
        <ul class="p-2">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  </div>
</div>
  `;
}

document.addEventListener("DOMContentLoaded", function () {
  const navbarHTML = crearNavbar();
  const navbarContainer = document.getElementById("navbar-container");
  navbarContainer.innerHTML = navbarHTML;
});
