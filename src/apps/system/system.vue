<template>
    <div class='container d-flex flex-column'>
        <div class='d-flex pt-1 pb-3'>
            <animated-span class='text-uppercase' :label='$t("SYSTEM.TITLE")'></animated-span>
        </div>
        <div class='d-flex flex-fill'>
            <div class='d-flex flex-wrap flex-fill'>
                <div class='d-flex align-items-center p-3' style='flex: 1 1 50%; min-width: 256px'>
                    <Menu class='fs-4' :menuHandler='{
                        items: ["language", "sound"],
                        labels: [$t("SYSTEM.SECTIONS.LANGUAGE.TITLE"), $t("SYSTEM.SECTIONS.SOUND.TITLE")],
                        selected: sectionSelected,
                        onChange: onSectionChange
                    }'></Menu>
                </div>
                <div class='d-flex align-items-center p-3' style='flex: 1 1 50%; min-width: 256px'>
                    <List v-if='sectionSelected === "language"' class='fs-4' :listHandler='{
                        items: ["en", "es", "de", "fr", "pt", "ja", "zh", "ko"],
                        labels: ["English", "Español", "Deutsch", "Français", "Português", "日本語", "中國人", "한국인"],
                        selected: $i18n.locale,
                        onChange: onlanguageChange
                    }'></List>
                    <List v-if='sectionSelected === "sound"' class='fs-4' :listHandler='{
                        items: ["music", "music-volume", "sound-effects", "sound-effects-volume"],
                        labels: [$t("SYSTEM.SECTIONS.SOUND.LIST.MUSIC"), $t("SYSTEM.SECTIONS.SOUND.LIST.MUSIC-VOLUME"), $t("SYSTEM.SECTIONS.SOUND.LIST.SOUND-EFFECTS"), $t("SYSTEM.SECTIONS.SOUND.LIST.SOUND-EFFECTS-VOLUME")],
                        slots: [
                            {
                                component: "ToggleSwitch", handler: {
                                    value: handler.music,
                                    onChange: onMusicChange
                                }
                            },
                            {
                                component: "Range", handler: {
                                    value: Math.floor(handler.musicVolume * 10),
                                    maxValue: 10,
                                    onChange: onVolumeMusicChange
                                }
                            },
                            {
                                component: "ToggleSwitch", handler: {
                                    value: handler.soundEffects,
                                    onChange: onSoundEffectChange
                                }
                            },
                            {
                                component: "Range", handler: {
                                    value: Math.floor(handler.soundEffectsVolume * 10),
                                    maxValue: 10,
                                    onChange: onVolumeSoundEffectChange
                                }
                            }
                        ],
                        selected: soundSelected,
                        onChange: onSoundChange
                    }'></List>
                </div>
            </div>
        </div>
        <div class='d-flex align-items-center py-3'>
            <Banner>
                <span class='fs-4'>{{ $t(getBannerContent()) }}</span>
            </Banner>
        </div>
    </div>
</template>

<script lang='ts' scoped>
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { AnimatedSpan, Banner, Card, Menu, List } from '../../components';

interface SystemHandler {
    music: boolean,
    musicVolume: number,
    soundEffects: boolean,
    soundEffectsVolume: number,
    onChange: Function // (param: string, newValue: boolean | number) => void
}

@Options({
    components: {
        AnimatedSpan,
        Banner,
        Card,
        Menu,
        List
    }
})
export default class System extends Vue {
    @Prop()
    public handler!: SystemHandler;

    public sectionSelected: string | null = null;
    public soundSelected: string | null = null;

    public onSectionChange(newSection: string): void {
        this.soundSelected = null;
        this.sectionSelected = newSection;
    }

    public onlanguageChange(newlanguage: string): void {
        this.$i18n.locale = newlanguage;
    }

    public onSoundChange(newSong: string): void {
        this.soundSelected = newSong;
    }

    public onMusicChange(newValue: boolean): void {
        this.handler.onChange('mutedMusic', newValue);
    }

    public onVolumeMusicChange(newValue: number): void {
        this.handler.onChange('musicVolume', newValue);
    }

    public onSoundEffectChange(newValue: boolean): void {
        this.handler.onChange('mutedSoundEffects', newValue);
    }

    public onVolumeSoundEffectChange(newValue: number): void {
        this.handler.onChange('soundEffectsVolume', newValue);
    }

    public getBannerContent(): string {
        switch (this.sectionSelected) {
            case 'language':
                return 'SYSTEM.SECTIONS.LANGUAGE.BANNER'
            case 'sound':
                return 'SYSTEM.SECTIONS.SOUND.BANNER'
            default:
                return 'SYSTEM.BANNER'
        }
    }
}
</script>