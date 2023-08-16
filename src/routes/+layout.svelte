<script>
  import "../app.postcss";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>
  
<Navbar let:hidden let:toggle>
    <NavBrand href="/">
      <img src="src/lib/images/logo.png" class="mr-3 h-6 sm:h-9" alt="Osu Music Import " />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Osu! Music Import tool</span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
      <NavLi href="/" active={true}>Home</NavLi>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/services">Services</NavLi>
      <NavLi href="/pricing">Pricing</NavLi>
      <NavLi href="/contact">Contact</NavLi>
    </NavUl>
</Navbar>
<div class="m-5">
  <slot />
</div>
