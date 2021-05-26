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

    <div class="d-flex justify-content-between py-2 pe-3 bb">
      <div class="cl-gray">Совместимость</div>
      <div class="d-flex align-items-center">
        <div class="me-2">Работает на этом iphone</div>
        <div class="arrow mr-3"></div>
      </div>
    </div>

    <div class="d-flex justify-content-between py-2 pe-3 bb">
      <div class="cl-gray">Геопозиция</div>
      <div class="d-flex align-items-center">
        <div class="me-2">Это приложение может использ...</div>
        <div class="arrow mr-3"></div>
      </div>
    </div>

    <div class="d-flex justify-content-between py-2 pe-3 bb">
      <div class="cl-gray">Языки</div>
      <div class="d-flex align-items-center">
        <div class="me-2">русский и ещё 38</div>
        <div class="arrow mr-3"></div>
      </div>
    </div>

    <div class="d-flex justify-content-between py-2 pe-3 bb">
      <div class="cl-gray">Возраст</div>
      <div class="d-flex align-items-center">
        <div class="me-2">12+</div>
        <div class="arrow mr-3"></div>
      </div>
    </div>

    <div class="d-flex justify-content-between py-2 pe-3 bb">
      <div class="cl-gray">Авторские права</div>
      <div>2021 WhatsApp LLC</div>
    </div>

    <div class="d-flex justify-content-between py-2 pe-3 bb">
      <div class="cl-blue">Веб-сайт разработчика</div>
      <div>
        <SvgSprite
          symbol="safari"
          size="0 0 15 15"
        />
      </div>
    </div>

    <div class="d-flex justify-content-between py-2 pe-3 bb">
      <div class="cl-blue">Конфиденциальность</div>
      <div>
        <SvgSprite
          symbol="hand"
          size="0 0 15 15"
        />
      </div>
    </div>

    <div class="d-flex justify-content-between py-2 pe-3 bb">
      <div class="cl-blue">Лицензионное соглашение</div>
      <div>
        <SvgSprite
          symbol="docx"
          size="0 0 15 15"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
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