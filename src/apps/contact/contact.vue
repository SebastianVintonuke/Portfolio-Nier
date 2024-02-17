<template>
    <div class='container d-flex flex-column'>
        <div class='d-flex pt-1 pb-3'>
            <animated-span class='text-uppercase' :label='$t("CONTACT.TITLE")'></animated-span>
        </div>
        <div class='d-flex flex-fill'>
            <div class='d-flex flex-wrap flex-fill'>
                <div class='d-flex align-items-center p-3' style='flex: 1 1 50%; min-width: 256px'>
                    <Menu class='fs-4' :menuHandler='{
                        items: ["form", "cv"],
                        labels: [$t("CONTACT.SECTIONS.FORM.TITLE"), $t("CONTACT.SECTIONS.CV.TITLE")],
                        selected: sectionSelected,
                        onChange: onSectionChange
                    }'></Menu>
                </div>
                <div class='d-flex align-items-center p-3' style='flex: 1 1 50%; min-width: 256px'>
                    <div class='d-flex flex-fill'>
                        <card v-if='sectionSelected === "form"' class='fs-4'
                            :cardHandler='{ label: $t("CONTACT.SECTIONS.FORM.TITLE"), icon: "" }'>
                            <Form></Form>
                        </card>
                        <card v-if='sectionSelected === "cv"' class='fs-4'
                            :cardHandler='{ label: $t("CONTACT.SECTIONS.CV.TITLE"), icon: "" }'>
                            <div class='d-flex flex-column gap-2'>
                                <div class='align-self-center' style='width: 63mm; height: 89.1mm'>
                                    <Cv
                                        ref="cv" style='display: flex; position: absolute; transform-origin: top left; transform: scale(0.3);'>
                                    </Cv>
                                </div>
                                <Button class='fs-6'
                                    :buttonHandler='{ label: $t("CONTACT.SECTIONS.CV.DOWNLOAD"), icon: "fa fa-arrow-down", onClick: downloadCv }'></Button>
                            </div>
                        </card>
                    </div>
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
import { AnimatedSpan, Banner, Card, Menu, Form, Cv, Button } from '../../components';
import jsPDF from 'jspdf';

@Options({
    components: {
        AnimatedSpan,
        Banner,
        Card,
        Menu,
        Form,
        Cv,
        Button
    }
})
export default class Contact extends Vue {
    public sectionSelected: string | null = null;

    public onSectionChange(newSection: string): void {
        this.sectionSelected = newSection;
    }

    public downloadCv(): void {
        const cvEl = (this.$refs.cv as any).$el;
        const pdf = new jsPDF('portrait', 'mm', 'a4');
        pdf.setLanguage(this.$i18n.locale.slice(0, 2) as any);
        pdf.html(cvEl, {
            callback: function (pdf) {
                pdf.deletePage(2);
                pdf.deletePage(3);
                pdf.deletePage(4);
                pdf.save('Sebastian-Vintoñuke.pdf');
            },
            html2canvas: { scale: 0.882 },
        });
    }

    public getBannerContent(): string {
        switch (this.sectionSelected) {
            case 'form':
                return 'CONTACT.SECTIONS.FORM.BANNER'
            case 'cv':
                return 'CONTACT.SECTIONS.CV.BANNER'
            default:
                return 'CONTACT.BANNER'
        }
    }
}
</script>