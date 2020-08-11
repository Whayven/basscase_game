<template>
    <div>
        <form class="questions">
            <!-- A4 -->
            <h3>1. Which of the following clefs would be most appropriate for instruments with a higher pitch?</h3>
            <input v-model="answer1" type="radio" name="answer1" id="Bass-Clef" value="1">
            <label for="Bass-Clef">Bass Clef</label><br>
            <input v-model="answer1" type="radio" name="answer1" id="High-instrument-clef" value="2">
            <label for="High-instrument-clef">High-instrument clef</label><br>
            <input v-model="answer1" type="radio" name="answer1" id="Tenor-Clef" value="3">
            <label for="Tenor-Clef">Tenor Clef</label><br>
            <input v-model="answer1" type="radio" name="answer1" id="Treble-clef" value="4">
            <label for="Treble-clef">Treble clef</label><br><br>
            <!-- A1 -->
            <h3>2. What does the top number of a time signature mean?</h3>
            <input v-model="answer2" type="radio" name="answer2" id="beats-per-measure" value="1">
            <label for="beats-per-measure">How many beats are in each measure</label><br>
            <input v-model="answer2" type="radio" name="answer2" id="loud" value="2">
            <label for="loud">How loud you should sing</label><br>
            <input v-model="answer2" type="radio" name="answer2" id="worth" value="3">
            <label for="worth">What note is worth one beat</label><br>
            <input v-model="answer2" type="radio" name="answer2" id="fast" value="4">
            <label for="fast">How fast or slow you should sing</label><br><br>
            <!-- A1 -->
            <h3>3. What is the highest female voice part in a four-part choir?</h3>
            <input v-model="answer3" type="radio" name="answer3" id="Soprano" value="1">
            <label for="Soprano">Soprano</label><br>
            <input v-model="answer3" type="radio" name="answer3" id="Alto" value="2">
            <label for="Alto">Alto</label><br>
            <input v-model="answer3" type="radio" name="answer3" id="Tenor" value="3">
            <label for="Tenor">Tenor</label><br>
            <input v-model="answer3" type="radio" name="answer3" id="Bass" value="4">
            <label for="Bass">Bass</label><br><br>
            <!-- A3 -->
            <h3>4. Which instrument has a single reed and is most popular in jazz and rock music?</h3>
            <input v-model="answer4" type="radio" name="answer4" id="Guitar" value="1">
            <label for="Guitar">Guitar</label><br>
            <input v-model="answer4" type="radio" name="answer4" id="Bass" value="2">
            <label for="Bass">Bass</label><br>
            <input v-model="answer4" type="radio" name="answer4" id="Saxophone" value="3">
            <label for="Saxophone">Saxophone</label><br>
            <input v-model="answer4" type="radio" name="answer4" id="Clarinet" value="4">
            <label for="Clarinet">Clarinet</label><br><br>
            <div class="button-container">
                <button class="button" @click.prevent="handleSubmit">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            answerKey: [4, 1, 1, 3],
            choices: [],
            answer1: Number,
            answer2: Number,
            answer3: Number,
            answer4: Number
        };
    },
    methods: {
        handleSubmit() {
            this.choices = [this.answer1, this.answer2, this.answer3, this.answer4];
            if (this.answerKey.toString() == this.choices.toString()) {
                console.log("Nice");
                this.$emit('finished')
            } else console.log("F in the chat");
            
        }
    }
}
</script>

<style scoped>
    .questions {
        text-align: center;
    }

    .button {
        margin-top: 50px;
    }
</style>