<template>
    <div>
        <header class='aboutUs'>
            <div class="title">ABOUT US</div>
            <div class='content'>
                <p>spa是指利用水資源結合沐浴、按摩、塗抹保養品和香熏來促進新陳代謝，滿足人體視覺、味覺、觸覺、嗅覺和思考達到一種身心暢快的享受。目前spa業界的說法認為，spa是由專業美療師、水、光線、芳香精油、音樂等多個元素組合而成的舒緩減壓方式，能幫助人達到身、心、靈的健美，所以高級的spa館通常都設在風景宜人的度假村，以尋求安寧的環境和清新空氣，而考慮到經營模式所以都和大飯店為複合方式並存，成為休假旅行的活動行程之一以吸引顧客。</p>
            </div>
        </header>
    </div>
</template>

<style lang='scss' scoped>
    @import '../scss/variable';

    .aboutUs{
        flex-direction: column;
    }
    .content{
        width: 45vw;
        font-size: $font-sec;
        line-height: 1.5em;
        p{
            padding: 30px 40px;
            background: $color-thir;
        }
    }
    @media screen and (max-width: 700px){
        .content{
            width: 60vw;
        }
    }
    @media screen and (max-width: 500px){
        .content{
            width: 80vw;
        }
    }
</style>