<script setup>
import {
    ControlsComponent,
    DiagramProvider, DiagramComponent, DiagramPaletteComponent, ExportControlsComponent
} from "@visuallyjs/browser-ui-vue"

import diagramOptions from './diagram-options'
import Inspector from "./Inspector.vue";
import './index.css'

const props = defineProps({
    url: {
        type: String,
        default: "/dataset.json"
    }
});

</script>

<template>
    <div class="vjs-shmi-container">
        <DiagramProvider>
            <div style="display:flex;flex: 1;position:relative">
                <DiagramComponent :options="diagramOptions" :url="url"/>
                <ControlsComponent/>
                <Inspector/>
                <div class="vjs-palette">
                    <DiagramPaletteComponent :showLabels="true" :iconSize="{width:120,height:120}"/>
                </div>
            </div>
        </DiagramProvider>
    </div>
</template>

<style>
html, body {
    margin:0;
    padding:0;
    width:100vw;
    height:100vh;
}
</style>
