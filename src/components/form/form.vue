<template>
    <div class='d-flex flex-column gap-2'>
        <div class='input-group input-group-sm'>
            <input ref='inputName' type='text' class='form-control' :placeholder='$t("CONTACT.SECTIONS.FORM.NAME")'
                required>
        </div>
        <div class='input-group input-group-sm'>
            <input ref='inputEmail' type='email' class='form-control' :placeholder='$t("CONTACT.SECTIONS.FORM.EMAIL")'
                required>
        </div>
        <div class='input-group input-group-sm'>
            <input ref='inputTel' type='tel' class='form-control' :placeholder='$t("CONTACT.SECTIONS.FORM.PHONE")' required>
        </div>
        <div class='input-group input-group-sm'>
            <textarea ref='inputTextArea' class='form-control' :placeholder='$t("CONTACT.SECTIONS.FORM.MESSAGE")'
                required></textarea>
        </div>
        <Button v-if='!emailSent && !emailError' class='fs-6' :buttonHandler='{ label: $t("CONTACT.SECTIONS.FORM.SEND"), icon: "fa fa-arrow-up", onClick: submit }'></Button>
        <div v-else-if='emailSent' class='d-flex gap-2 fs-6' style="color: #3ba99f">
            <div class='d-flex align-items-center'><i class="fa fa-sharp fa-solid fa-check"></i></div>
            <span>{{ $t("CONTACT.SECTIONS.FORM.MESSAGE_SENT") }}</span>
        </div>
        <div v-else-if='emailError' class='d-flex gap-3 fs-6' style="color: #cd664d">
            <div class='d-flex align-items-center'><i class="fa fa-sharp fa-solid fa-exclamation"></i></div>
            <span>{{ $t("CONTACT.SECTIONS.FORM.MESSAGE_ERROR") }}</span>
        </div>
    </div>
</template>

<script lang='ts' scoped>
import { Vue, Options } from 'vue-class-component';
import { Button } from '../../components';
import emailjs from 'emailjs-com';

const SERVICE_ID = process.env.VUE_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.VUE_APP_TEMPLATE_ID;
const USER_ID = process.env.VUE_APP_USER_ID;

@Options({
    components: {
        Button
    }
})
export default class Form extends Vue {
    public emailSent = false;
    public emailError = false;

    public submit(): void {
        let formIsValid = true;
        formIsValid = this.updateInput('inputName', this.nameIsValid);
        formIsValid = this.updateInput('inputEmail', this.emailIsValid);
        formIsValid = this.updateInput('inputTextArea', this.msgIsValid);
        if (!formIsValid) return

        const templateParams = {
            from_name: 'Portfolio Conctact Form',
            message: `
                Name: ${(this.$refs.inputName as HTMLInputElement).value}
                Email: ${(this.$refs.inputEmail as HTMLInputElement).value}
                Phone Number: ${(this.$refs.inputTel as HTMLInputElement).value}
                Message: ${(this.$refs.inputTextArea as HTMLInputElement).value}
            `,
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
            .then(() => {
                this.emailSent = true;
            })
            .catch((error) => {
                this.emailError = true;
                console.error(error);
            });
    }

    private updateInput(inputRef: string, validator: Function): boolean {
        const elm = this.$refs[inputRef] as HTMLInputElement;
        if (!elm) throw 'Error no input '.concat(inputRef)
        const valueIsValid = validator(elm.value);
        if (valueIsValid) {
            elm.classList.remove('invalid');
            return true
        } else {
            elm.classList.add('invalid');
            return false
        }
    }

    private nameIsValid(name: string): boolean {
        return !!name.length
    }

    private emailIsValid(email: string): boolean {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email)
    }

    private msgIsValid(msg: string): boolean {
        return !!msg.length
    }
}
</script>

<style lang='scss' scoped>
input,
textarea {
    border: 2px solid;
    border-radius: 0 !important;
    color: #1d1a15;
    border-color: #aba78f;
    background-color: #aba78f;

    &::placeholder {
        color: #625f54;
    }

    &:hover {
        border-color: #625f54;
    }

    &:focus {
        color: #c9c5ab;
        background-color: #4b483f;
        border-color: #4b483f;

        &::placeholder {
            color: #c9c5ab;
        }
    }

    &.invalid,
    :invalid {
        color: #cd664d;
        border-color: #cd664d;
    }
}</style>