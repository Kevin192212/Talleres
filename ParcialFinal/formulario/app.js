// Componente EstadoCivil
const EstadoCivil = {
    props: ['form'],
    template: `
      <div>
        <label>Nombre del Cónyuge/Compañero:</label>
        <input type="text" v-model="form.nombreConyuge" />
  
        <label>Teléfono del Cónyuge/Compañero:</label>
        <input type="text" v-model="form.telefonoConyuge" />
      </div>
    `
  };
  
  // Componente Hijos
  const Hijos = {
    props: ['numHijos'],
    data() {
      return {
        hijos: []
      };
    },
    watch: {
      numHijos(newValue) {
        // Ajustar el tamaño de la lista de hijos
        if (newValue > this.hijos.length) {
          this.hijos = [...this.hijos, ...Array(newValue - this.hijos.length).fill('')];
        } else if (newValue < this.hijos.length) {
          this.hijos = this.hijos.slice(0, newValue);
        }
        this.$emit('updateHijos', this.hijos);
      }
    },
    template: `
      <div>
        <label>¿Cuántos hijos tiene?</label>
        <input type="number" v-model.number="numHijos" min="0" />
  
        <div v-for="(hijo, index) in hijos" :key="index">
          <label>Nombre del hijo {{ index + 1 }}:</label>
          <input type="text" v-model="hijos[index]" @input="$emit('updateHijos', hijos)" />
        </div>
      </div>
    `
  };
  
  // Componente Subsidio
  const Subsidio = {
    template: `
      <div class="subsidy">
        Tienes derecho a un subsidio de 100.000 pesos por cada hijo(a).
      </div>
    `
  };
  
  // Aplicación Vue
  new Vue({
    el: '#app',
    data() {
      return {
        form: {
          tipoDocumento: '',
          documento: '',
          nombre: '',
          fechaNacimiento: '',
          sexo: '',
          estadoCivil: '',
          nombreConyuge: '',
          telefonoConyuge: '',
          tieneHijos: 'no',
          numHijos: 0,
          hijos: [],
          departamento: '',
          ciudad: ''
        },
        departments: [],
        cities: [],
        showSpouseFields: false,
        showChildrenFields: false,
        showSubsidio: false
      };
    },
    methods: {
      handleEstadoCivilChange() {
        this.showSpouseFields = ['casado', 'unionLibre'].includes(this.form.estadoCivil);
        this.updateSubsidio();
      },
      handleTieneHijosChange() {
        this.showChildrenFields = this.form.tieneHijos === 'si';
        if (!this.showChildrenFields) {
          this.form.numHijos = 0;
          this.form.hijos = [];
          this.showSubsidio = false;
        } else {
          this.updateSubsidio();
        }
      },
      loadCities() {
        const department = this.departments.find(dep => dep.name === this.form.departamento);
        this.cities = department ? department.cities : [];
      },
      submitForm() {
        alert('Formulario enviado con éxito.');
        console.log(this.form);
      },
      updateHijos(hijos) {
        this.form.hijos = hijos;
        this.form.numHijos = hijos.length;  // Actualizar numHijos
        this.updateSubsidio();
      },
      updateSubsidio() {
        this.showSubsidio =
          this.form.sexo === 'femenino' &&
          this.form.estadoCivil === 'soltero' &&
          this.form.hijos.length > 0; // Usar .length para contar los hijos
  
        console.log('¿Mostrar subsidio?', this.showSubsidio); // Para verificar la lógica
      }
    },
    components: {
      EstadoCivil,
      Hijos,
      Subsidio
    },
    created() {
      // Cargar departamentos desde el archivo JSON
      fetch('./data/departamentos.json')
        .then(response => response.json())
        .then(data => {
          this.departments = data;
        });
    },
    template: `
      <div class="form-container">
        <h1>Formulario de Registro</h1>
        <form @submit.prevent="submitForm">
          <label>Tipo de Documento:</label>
          <select v-model="form.tipoDocumento">
            <option value="cc">Cédula</option>
            <option value="ti">Tarjeta de Identidad</option>
          </select>
  
          <label>Documento:</label>
          <input type="text" v-model="form.documento" />
  
          <label>Nombre:</label>
          <input type="text" v-model="form.nombre" />
  
          <label>Fecha de Nacimiento:</label>
          <input type="date" v-model="form.fechaNacimiento" />
  
          <label>Sexo:</label>
          <select v-model="form.sexo" @change="updateSubsidio">
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </select>
  
          <label>Estado Civil:</label>
          <select v-model="form.estadoCivil" @change="handleEstadoCivilChange">
            <option value="soltero">Soltero</option>
            <option value="casado">Casado</option>
            <option value="unionLibre">Unión Libre</option>
          </select>
  
          <estado-civil v-if="showSpouseFields" :form="form" />
  
          <label>¿Tiene hijos?</label>
          <select v-model="form.tieneHijos" @change="handleTieneHijosChange">
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
  
          <hijos
            v-if="showChildrenFields"
            :numHijos="form.numHijos"
            @updateHijos="updateHijos"
          />
  
          <label>Departamento:</label>
          <select v-model="form.departamento" @change="loadCities">
            <option v-for="department in departments" :key="department.name" :value="department.name">
              {{ department.name }}
            </option>
          </select>
  
          <label>Ciudad:</label>
          <select v-model="form.ciudad">
            <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
          </select>
  
          <!-- Mostrar subsidio si se cumplen las condiciones -->
          <subsidio v-if="showSubsidio" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    `
  });
  