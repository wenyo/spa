<template>
    <header class='booking'>
        <div class="title">BOOKING</div>
        <div class="bookingFrom">
            <label>
                <span>NAME</span>
                <input class='textBox' type="text" placeholder="text your name here">
            </label>
            <label>
                <span>PHONE</span>
                <input class='textBox' type="text" placeholder="0912345678">
            </label>
            <label>
                <span>EMAIL</span>
                <input class='textBox' type="text" placeholder="test@spa.mail">
            </label>
            <div>
                <span>COURSE</span>
                <div class="option">
                    <label>
                        <input type="checkbox" name="" id="">
                        <span>花草芬芳精油</span>
                    </label>
                    <label>
                        <input type="checkbox" name="" id="">
                        <span>深層指壓按摩全身</span>
                    </label>
                    <label>
                        <input type="checkbox" name="" id="">
                        <span>足部水療課程</span>
                    </label>
                </div>

            </div>
            <span class="submit">預約</span>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    @import '../scss/variable';

    .booking{
        background: url('../img/maja-petric-A4dhzVLC_Do-unsplash.jpg');
        background-color: $color-four;
        background-repeat: no-repeat;
        background-position: right;
        background-attachment: fixed;
        background-size: auto 100vh;
        flex-direction: column;
        align-items: flex-start;
        padding: 0 10vw;
    }
    .title{
        color: $color-master;
    }
    .bookingFrom{
        margin: 20px 0;
        font-size: $font-thir;
        &>label{
            width: 250px;
            margin: 15px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
    .textBox{
        padding: 5px 10px;
        border-radius: 3px;
        border: none;
        border: 1px solid $color-thir;
    }
    .option{
        margin: 10px 0;
        font-size: $font-sec;
    }
    .submit{
        cursor: pointer;
        display: inline-block;
        margin-top: 15px;
        font-size: $font-sec;
        padding: 10px 15px;
        border-radius: 3px;
        border: 1px solid $color-master;
        background-color: $color-sec;
        color: $color-master;
        transition: all .3s;
        &:hover{
            background-color: $color-master;
            color: $color-sec;
        }
    }
</style>