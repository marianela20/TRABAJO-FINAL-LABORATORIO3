<template>
    <div>
    <h2>Comprar</h2>
    <form @submit.prevent="Comprar" class="comprar-form"> <!--Evita que se recargue la pagina y -->
      <label name="cryptomoneda">Seleccione la cryptomoneda</label>
      <select name="cryptomoneda" >
        <option value="Bitcoin">Bitcoin</option>
        <option value="Dai">Dai</option>
        <option value="Ethereum">Ethereum</option>
      </select>
      <label name="cantidad">Ingrese la cantidad</label>
      <input  id="cantidad" type="number" placeholder="Ingrese la cantidad" required> <!-- v-model nos permite ligar los campos input a variables de javascrip, v-model nos permite asignarle este input al campo dentro de la data que voy a asociar, el punto trim elimina los espacios en blanco -->
      <button type="submit">Comprar</button>
    </form>
    
  </div> 
</template>

<script>

</script>

<style>

</style>
