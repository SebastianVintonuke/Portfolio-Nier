<template>
    <div :class='"animated-span " + (isMobile ? "fs-1 tittle-mobile" : "tittle-desktop")'>
    <span v-for='(char, index) in label' :key='index' class='char' :style='charStyles[index]'>
        {{ char }}
    </span>
    </div>
</template>
    
<script lang='ts' scoped>
import { Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator';
    
export default class AnimatedSpan extends Vue {
    @Prop(String) readonly label!: string;

    public charStyles: Array<string> = [];
    public windowSize = window.innerWidth;

    public created(): void {
        this.initializeCharStyles();
        this.showText();
    }

    public mounted() {
        window.addEventListener('resize', this.updateWindowSize);
    }

    public beforeUnmount() {
        window.removeEventListener('resize', this.updateWindowSize);
    }

    get isMobile(): boolean {
        return this.windowSize <= 850;
    }

    private updateWindowSize(): void {
        this.windowSize = window.innerWidth;
    }

    private initializeCharStyles(): void {
        for (let i = 0; i < this.label.length; i++) {
            this.charStyles[i] = 'opacity: 0; transform:' + this.getRandomTransform() + ';';
        }
    }

    private showText(): void {
        for (let i = 0; i < this.label.length; i++) {
            new Promise(resolve => { setTimeout(() => resolve(null), i * 100); })
                .then(() => {
                    this.charStyles[i] = 'opacity: 1; transform: translateX(0) translateY(0) skewX(0) skewY(0) scaleX(1) scaleY(1) rotate(0);';
                });
        }
    }

    /* TODO */
    private getRandomTransform(): string {
        let transform = '';
        transform += ' translateX(50%)'
        /*transform += ' translateY(50%)'
        transform += ' skewX(45deg)'
        transform += ' skewY(45deg)'
        transform += ' scaleX(-1)'
        transform += ' scaleY(-1)'
        transform += ' rotate(45deg)'*/
        return transform
    }
}
</script>

<style lang='scss' scoped>
.animated-span {
    display: inline-block;
    color: #3e3c34;
    font-family: 'Rodin', sans-serif;
    letter-spacing: 15px;
    text-shadow: 8px 8px #878574;
}

.tittle-mobile {
    text-shadow: 5px 5px #878574;
}

.tittle-desktop {
    font-size: 50px;
    text-shadow: 8px 8px #878574;
}

.char {
    display: inline-block;
    transition: opacity 0.5s, transform 0.5s;
}
</style>