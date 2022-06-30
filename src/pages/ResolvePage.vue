<template>
    <div>
        <header class="container-fluid" style="margin-bottom: 20px;">
                            <h1>Инструкция для DaVinci Resolve</h1>
        <router-link to="/" style="margin-bottom: 20px;">Назад</router-link>
        </header>
    <div style="display:flex; justify-content: flex-start; align-items: center; flex-direction: column; width:100%;">

        <div class="container-md" style="">
        <step-block header="Шаг 1." text="Переходим в окно 'Deliver'." pic="/resolve/resolve1.png"></step-block>
        <step-block header="Шаг 2." text="В окне 'Render Settings' доскроллливаем до Pro Tools и выбираем его." pic="/resolve/resolve2.png"></step-block>
        <step-block header="Шаг 3." text="Выставляем настройки видео/аудио." pic="/resolve/resolve3.png"></step-block>
        <step-block header="Шаг 4." text="Добавляем в очередь и рендерим!" pic="/resolve/resolve4.png"></step-block>
                <step-block header="Шаг 5." text="ПРОФИТ! Теперь у вас есть готовые файлы, с которыми сможет работать звукорежиссёр."></step-block>
    </div>
    </div>
        </div>
</template>
<script>
import StepBlock from '@/components/StepBlock.vue'
export default {
  components: { StepBlock },
    name:"ResolvePage"
}
</script>