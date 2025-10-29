<template>
  <div class="container mt-4">
    <h3>Gestión de Productos</h3>
    <div class="mb-3">
      <input v-model="nombre" class="form-control mb-2" placeholder="Nombre del producto" />
      <input v-model="precio" type="number" class="form-control mb-2" placeholder="Precio" />
      <button @click="agregarProducto" class="btn btn-success w-100">Agregar Producto</button>
    </div>

    <table class="table table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, index) in productos" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ p.nombre }}</td>
          <td>{{ p.precio }}</td>
          <td>
            <button @click="editarProducto(index)" class="btn btn-warning btn-sm">Editar</button>
            <button @click="eliminarProducto(index)" class="btn btn-danger btn-sm">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productos: JSON.parse(localStorage.getItem('productos')) || [],
      nombre: '',
      precio: '',
      editIndex: null
    }
  },
  methods: {
    agregarProducto() {
      if (this.nombre && this.precio) {
        if (this.editIndex !== null) {
          this.productos[this.editIndex] = { nombre: this.nombre, precio: this.precio }
          this.editIndex = null
        } else {
          this.productos.push({ nombre: this.nombre, precio: this.precio })
        }
        this.guardarLocal()
        this.nombre = ''
        this.precio = ''
      }
    },
    eliminarProducto(index) {
      this.productos.splice(index, 1)
      this.guardarLocal()
    },
    editarProducto(index) {
      const producto = this.productos[index]
      this.nombre = producto.nombre
      this.precio = producto.precio
      this.editIndex = index
    },
    guardarLocal() {
      localStorage.setItem('productos', JSON.stringify(this.productos))
    }
  }
}
</script>