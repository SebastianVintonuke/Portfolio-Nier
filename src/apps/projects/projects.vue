<template>
    <div class='container d-flex flex-column'>
        <div class='d-flex pt-1 pb-3'>
            <animated-span class='text-uppercase' :label='$t("PROJECTS.TITLE")'></animated-span>
        </div>
        <div class='d-flex flex-fill'>
            <div class='d-flex flex-wrap flex-fill'>
                <div class='d-flex align-items-center p-3' style='flex: 1 1 50%; min-width: 256px'>
                    <div class='d-flex flex-fill'>
                        <List class='fs-4' :listHandler='{
                            items: projects.map(project => project.id),
                            labels: projects.map(project => $t(project.tittleToken)),
                            selected: projectSelected,
                            onChange: onSectionChange
                        }'></List>
                    </div>
                </div>
                <div class='d-flex align-items-center p-3' style='flex: 1 1 50%; min-width: 256px'>
                    <div class='d-flex flex-fill'>
                        <card v-if='projectSelected' class='fs-4'
                            :cardHandler='{ label: $t(projectSelected?.tittleToken), icon: "" }'>
                            <div class='d-flex flex-column gap-2'>
                                <div class='d-flex'>
                                    <img :src='projectSelected?.imgSrc' class='img-fluid' alt=''>
                                </div>
                                <hr>
                                <div class='d-flex'>
                                    <span class='fs-6 fw-light lh-1'>{{ $t(projectSelected?.contentToken) }}</span>
                                </div>
                                <hr>
                                <div class='d-flex gap-2'>
                                    <NierButton v-if='projectSelected.demoLink' class='fs-5'
                                        :buttonHandler='{ label: $t("PROJECTS.TRY"), icon: "fa fa-play", onClick: () => openLink(projectSelected?.demoLink || null) }'>
                                    </NierButton>
                                    <NierButton v-if='projectSelected.gitHubLink' class='fs-5'
                                        :buttonHandler='{ label: $t("PROJECTS.GITHUB"), icon: "fa fa-github", onClick: () => openLink(projectSelected?.gitHubLink || null) }'>
                                    </NierButton>
                                </div>
                            </div>
                        </card>
                    </div>
                </div>
            </div>
        </div>
        <div class='d-flex align-items-center py-3'>
            <Banner>
                <span class='fs-4'>{{ $t(projectSelected?.bannerToken || 'PROJECTS.BANNER') }}</span>
            </Banner>
        </div>
    </div>
</template>

<script lang='ts' scoped>
import { Vue, Options } from 'vue-class-component';
import { AnimatedSpan, Banner, Card, List, Button as NierButton } from '../../components';
import { Project, PROJECTS } from './projects';

@Options({
    components: {
        AnimatedSpan,
        Banner,
        Card,
        List,
        NierButton
    }
})
export default class Projects extends Vue {
    public projectSelected: Project | null = null;
    public projects: Project[] = PROJECTS;

    public onSectionChange(newSection: string): void {
        this.projectSelected = null;
        new Promise(resolve => { setTimeout(() => { resolve(null); }, 2); })
            .then(() => this.projectSelected = this.projects.find(project => project.id === newSection) || null);
    }

    public openLink(link: string | null): void {
        if (link) { window.open(link, '_blank'); }
    }
}
</script>