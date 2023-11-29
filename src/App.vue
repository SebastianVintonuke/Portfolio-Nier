<template>
<div id='app' ref='app'>
    <Loader v-if='loading' :handler='{ onReady }'></Loader>
    <div v-else class='d-flex justify-content-center background-mh-all background-primary' style='font-family: sans-serif;'>
        <div class='d-flex flex-column justify-content-center flex-fill'>
            <NavBar :handler='{ onChange: onAppChange }'></NavBar>
            <MosaicArray></MosaicArray>
            <Home v-if='appSelected === "home"' class='flex-fill'></Home>
            <Projects v-if='appSelected === "projects"' class='flex-fill'></Projects>
            <Contact v-if='appSelected === "contact"' class='flex-fill'></Contact>
            <System v-if='appSelected === "system"' class='flex-fill' :handler='{
                music,
                musicVolume,
                soundEffects,
                soundEffectsVolume,
                onChange: onChangeSetting
            }'></System>
            <MosaicArray></MosaicArray>
        </div>
    </div>
</div>
</template>

<script lang='ts' scoped>
import { Vue, Options } from 'vue-class-component';
import { Loader, Home, Projects, Contact, System } from './apps';
import { NavBar, MosaicArray, Cv } from './components';
import './core/styles.scss';

const INITIAL_MUSIC_VOLUME = 0.5;
const INITIAL_SOUND_EFFECT_VOLUME = 0.5;

@Options({
    name: 'App',
    components: {
        Loader,
        NavBar,
        Home,
        Projects,
        Contact,
        System,
        MosaicArray,
        Cv
    }
})
export default class App extends Vue {
    public loading = true;
    public appSelected = '';

    public music = true;
    public musicVolume = 1;

    public soundEffects = true;
    public soundEffectsVolume = 1;

    public created(): void {
        this.musicVolume = INITIAL_MUSIC_VOLUME;
        this.soundEffectsVolume = INITIAL_SOUND_EFFECT_VOLUME;
    }

    public onReady(): void {
        this.loading = false;
        this.addSounds();
    }

    public onAppChange(app: string): void {
        this.appSelected = app;
    }

    public onChangeSetting(setting: string, newValue: number | boolean): void {
        switch (setting) {
            case 'mutedMusic':
                this.music = newValue as boolean;
                if (this.music) {
                    this.$el.ownerDocument.getElementById('audioWeightOfTheWorld')?.play();
                } else {
                    this.$el.ownerDocument.getElementById('audioWeightOfTheWorld')?.pause();
                }
                break
            case 'musicVolume':
                this.musicVolume = (newValue as number) / 10;
                this.$el.ownerDocument.getElementById('audioWeightOfTheWorld').volume = this.musicVolume;
                break
            case 'mutedSoundEffects':
                this.soundEffects = newValue as boolean;
                if (this.soundEffects) {
                    this.$el.ownerDocument.getElementById('audioScroll').volume = this.soundEffectsVolume;
                    this.$el.ownerDocument.getElementById('audioClick').volume = this.soundEffectsVolume;
                } else {
                    this.$el.ownerDocument.getElementById('audioScroll').volume = 0;
                    this.$el.ownerDocument.getElementById('audioClick').volume = 0;
                }
                break
            case 'soundEffectsVolume':
                this.soundEffectsVolume = (newValue as number) / 10;
                if (this.soundEffects) {
                    this.$el.ownerDocument.getElementById('audioScroll').volume = this.soundEffectsVolume;
                    this.$el.ownerDocument.getElementById('audioClick').volume = this.soundEffectsVolume;
                }
                break
        }
    }

    private addSounds(): void {
        new Promise(resolve => { setTimeout(() => resolve(null), 1); })
            .then(() => {
                const app = document.getElementById('app');
                if (!app) return

                const createAudioElement = (id: string, source: string): HTMLElement => {
                    const audioElement = document.createElement('audio');
                    audioElement.setAttribute('id', id);
                    const sourceElement = document.createElement('source');
                    sourceElement.setAttribute('src', source);
                    sourceElement.setAttribute('type', 'audio/ogg');
                    audioElement.appendChild(sourceElement);
                    return audioElement
                }

                app.appendChild(createAudioElement('audioWeightOfTheWorld', './sound/weight_of_the_world.ogg'));
                app.appendChild(createAudioElement('audioScroll', './sound/scroll.ogg'));
                app.appendChild(createAudioElement('audioClick', './sound/click.ogg'));

                // SOUND EFFECTS
                this.$el.ownerDocument.getElementById('audioScroll').volume = this.soundEffectsVolume;
                this.$el.ownerDocument.getElementById('audioClick').volume = this.soundEffectsVolume;

                // MUSIC
                this.$el.ownerDocument.getElementById('audioWeightOfTheWorld').volume = this.musicVolume;
                this.$el.ownerDocument.getElementById('audioWeightOfTheWorld').setAttribute('loop', true);
                this.$el.ownerDocument.getElementById('audioWeightOfTheWorld')?.play();
            });
    }
}
</script>
