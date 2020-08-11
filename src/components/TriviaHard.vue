<template>
    <div>
        <form class="questions">
            <!-- A1 -->
            <h3>1. How many notes are there in a heptatonic scale, the traditional scale in Western music?</h3>
            <input v-model="answer1" type="radio" name="answer1" id="7" value="1">
            <label for="7">7</label><br>
            <input v-model="answer1" type="radio" name="answer1" id="5" value="2">
            <label for="5">5</label><br>
            <input v-model="answer1" type="radio" name="answer1" id="6" value="3">
            <label for="6">6</label><br><br>
            <!-- A2 -->
            <h3>2. What is the name of the 4th degree of a scale?</h3>
            <input v-model="answer2" type="radio" name="answer2" id="Dominant" value="1">
            <label for="Dominant">Dominant</label><br>
            <input v-model="answer2" type="radio" name="answer2" id="Subdominant" value="2">
            <label for="Subdominant">Subdominant</label><br>
            <input v-model="answer2" type="radio" name="answer2" id="Mediant" value="3">
            <label for="Mediant">Mediant</label><br><br>
            <!-- A3 -->
            <h3>3. What is another name for the Treble Clef?</h3>
            <input v-model="answer3" type="radio" name="answer3" id="C-Clef" value="1">
            <label for="C-Clef">C Clef</label><br>
            <input v-model="answer3" type="radio" name="answer3" id="B-Clef" value="2">
            <label for="B-Clef">B Clef</label><br>
            <input v-model="answer3" type="radio" name="answer3" id="D-Clef" value="3">
            <label for="D-Clef">D Clef</label><br><br>
            <!-- A2 -->
            <h3>4. How many notes are there in an octave?</h3>
            <input v-model="answer4" type="radio" name="answer4" id="7" value="1">
            <label for="7">7</label><br>
            <input v-model="answer4" type="radio" name="answer4" id="8" value="2">
            <label for="8">8</label><br>
            <input v-model="answer4" type="radio" name="answer4" id="9" value="3">
            <label for="9">9</label><br>
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
            answerKey: [1, 2, 3, 2],
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
                this.$router.push('select');
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