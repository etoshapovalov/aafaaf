<template>
    <div>
        <header class="container-fluid" style="margin-bottom: 20px;">
                            <h1>Инструкция для Adobe Premiere Pro</h1>
        <router-link to="/" style="margin-bottom: 20px;">Назад</router-link>
        </header>
    <div style="display:flex; justify-content: flex-start; align-items: center; flex-direction: column; width:100%;">

        <div class="container-md" style="">
        <step-block header="Шаг 1." text="Для начала, всё как обычно. File -> Export -> AAF" pic="/premiere/premiere1.png"></step-block>
        <step-block header="Шаг 2." text="Включите 'Mixdown Video' для того, чтобы включить зарендеренное видео в AAF файл. Включите 'Breakout to Mono' и установите настройки экспорта аудио, в соответствии с теми, что предоставил вам звукорежиссер. Жмём ОК." pic="/premiere/premiere2.png"></step-block>
        <step-block header="Шаг 3." text="Теперь необходимо выбрать папку для сохранения нашего файла." pic="/premiere/premiere3.png"></step-block>
        <step-block header="Шаг 4." text="ПРОФИТ! Теперь у вас есть готовые файлы, с которыми сможет работать звукорежиссёр."></step-block>
    </div>
    </div>
        </div>
</template>
<script>
import StepBlock from '@/components/StepBlock.vue'
export default {
  components: { StepBlock },
    name:"PremierePage"
}
</script>