<template>
  <div class="app-wrapper info-wrapper">
    <h2 class="mb-2">Информация</h2>
    <div class="d-flex justify-content-between py-2 pe-3 bb">
      <div class="cl-gray">Провайдер</div>
      <div>WhatsApp Inc</div>
    </div>
    <div class="d-flex justify-content-between py-2 pe-3 bb">
      <div class="cl-gray">Размер</div>
      <div>97,3 МБ</div>
    </div>

    <div class="d-flex justify-content-between py-2 pe-3 bb">
      <div class="cl-gray">Категория</div>
      <div>Социальные сети</div>
    </div>

    <MoreInfo 
      v-for="block in blocks" 
      :key="block.text"
      :title="block.title"
      :text="block.text"
    />

    <div class="d-flex justify-content-between py-2 pe-3 bb">
      <div class="cl-gray">Авторские права</div>
      <div>2021 WhatsApp LLC</div>
    </div>

    <div class="d-flex justify-content-between py-2 pe-3 bb">
      <div class="cl-blue">Веб-сайт разработчика</div>
      <div>
        <svg
          height="15px"
          viewBox="0 0 384 384"
          width="15px"
          xmlns="http://www.w3.org/2000/svg"
          fill="#177ae4"
        >
          <path
            d="m192 0c-105.871094 0-192 86.128906-192 192s86.128906 192 192 192 192-86.128906 192-192-86.128906-192-192-192zm0 352c-88.222656 0-160-71.777344-160-160s71.777344-160 160-160 160 71.777344 160 160-71.777344 160-160 160zm0 0"
          />
          <path
            d="m102.703125 281.296875 133.945313-44.648437 44.648437-133.945313-133.945313 44.648437zm69.945313-108.648437 58.054687-19.351563-19.351563 58.054687-58.054687 19.351563zm0 0"
          />
        </svg>
      </div>
    </div>

    <div class="d-flex justify-content-between py-2 pe-3 bb">
      <div class="cl-blue">Конфиденциальность</div>
      <div>
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="15px"
          height="15px"
          viewBox="0 0 26 26"
          style="enable-background: new 0 0 26 26"
          xml:space="preserve"
          fill="#177ae4"
        >
          <g>
            <circle style="fill: #030104" cx="21.732" cy="5.5" r="1.5" />
            <circle style="fill: #030104" cx="17.732" cy="2.5" r="1.5" />
            <circle style="fill: #030104" cx="13.732" cy="1.5" r="1.5" />
            <circle style="fill: #030104" cx="9.732" cy="3.5" r="1.5" />
            <path
              d="M20.232,5.5V12c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5V2.5h-3V11c0,0.276-0.224,0.5-0.5,0.5
		c-0.276,0-0.5-0.224-0.5-0.5V1.5h-3V11c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5V3.5h-3V16l-2.025-2.771
		c-0.6-0.925-1.771-1.235-2.629-0.705c-0.855,0.542-1.067,1.724-0.475,2.646c0,0,3.266,4.943,4.658,7.059S11.408,26,15.625,26
		c6.982,0,7.607-5.392,7.607-7s0-13.5,0-13.5H20.232z"
            />
          </g>
        </svg>
      </div>
    </div>

    <div class="d-flex justify-content-between py-2 pe-3 bb">
      <div class="cl-blue">Лицензионное соглашение</div>
      <div>
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="15px"
          height="15px"
          viewBox="0 0 470.586 470.586"
          style="enable-background: new 0 0 470.586 470.586"
          xml:space="preserve"
          fill="#177ae4"
        >
          <g>
            <path
              d="M327.081,0H90.234C74.331,0,61.381,12.959,61.381,28.859v412.863c0,15.924,12.95,28.863,28.853,28.863H380.35
		c15.917,0,28.855-12.939,28.855-28.863V89.234L327.081,0z M333.891,43.184l35.996,39.121h-35.996V43.184z M384.972,441.723
		c0,2.542-2.081,4.629-4.635,4.629H90.234c-2.55,0-4.619-2.087-4.619-4.629V28.859c0-2.548,2.069-4.613,4.619-4.613h219.411v70.181
		c0,6.682,5.443,12.099,12.129,12.099h63.198V441.723z M128.364,128.89H334.15c5.013,0,9.079,4.066,9.079,9.079
		c0,5.013-4.066,9.079-9.079,9.079H128.364c-5.012,0-9.079-4.066-9.079-9.079C119.285,132.957,123.352,128.89,128.364,128.89z
		 M343.229,198.98c0,5.012-4.066,9.079-9.079,9.079H128.364c-5.012,0-9.079-4.066-9.079-9.079s4.067-9.079,9.079-9.079H334.15
		C339.163,189.901,343.229,193.968,343.229,198.98z M343.229,257.993c0,5.013-4.066,9.079-9.079,9.079H128.364
		c-5.012,0-9.079-4.066-9.079-9.079s4.067-9.079,9.079-9.079H334.15C339.163,248.914,343.229,252.98,343.229,257.993z
		 M343.229,318.011c0,5.013-4.066,9.079-9.079,9.079H128.364c-5.012,0-9.079-4.066-9.079-9.079s4.067-9.079,9.079-9.079H334.15
		C339.163,308.932,343.229,312.998,343.229,318.011z"
            />
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import MoreInfo from './MoreInfo';
export default {
  name: "Info",
  components: {
    MoreInfo
  },
  data() {
    return {
      blocks: [
        {title:'Совместимость', text: 'Работает на этом iphone'},
        {title:'Геопозиция', text: 'Это приложение может использ...'},
        {title:'Языки', text: 'русский и ещё 38'},
        {title:'Возраст', text: '12+'},
      ]
    }
  }
};
</script>

<style lang="scss">
.info-wrapper {
  font-size: 12px;
}
.bb {
  border-bottom: 1px solid #282828;

  &:last-child {
    border: none;
  }
}
</style>