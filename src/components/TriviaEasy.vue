<template>
    <div>
        <form class="questions">
            <!-- A1 -->
            <h3>1. Which clef has the notes FACE in its spaces?</h3>
            <input v-model="answer1" type="radio" name="answer1" id="Treble" value="1">
            <label for="Treble">Treble</label><br>
            <input v-model="answer1" type="radio" name="answer1" id="Bass" value="2">
            <label for="Bass">Bass</label><br>
            <input v-model="answer1" type="radio" name="answer1" id="Alto" value="3">
            <label for="Alto">Alto</label><br><br>
            <!-- A3 -->
            <h3>2. Presto, largo, allegro - these terms, amongst many others, relate to what property of music?</h3>
            <input v-model="answer2" type="radio" name="answer2" id="Timbre" value="1">
            <label for="Timbre">Timbre</label><br>
            <input v-model="answer2" type="radio" name="answer2" id="Harmony" value="2">
            <label for="Harmony">Harmony</label><br>
            <input v-model="answer2" type="radio" name="answer2" id="Tempo" value="3">
            <label for="Tempo">Tempo</label><br><br>
            <!-- A3 -->
            <h3>3. On the Treble Clef staff, what is the note on the first line from the bottom called?</h3>
            <input v-model="answer3" type="radio" name="answer3" id="F" value="1">
            <label for="F">F</label><br>
            <input v-model="answer3" type="radio" name="answer3" id="A" value="2">
            <label for="A">A</label><br>
            <input v-model="answer3" type="radio" name="answer3" id="E" value="3">
            <label for="E">E</label><br><br>
            <!-- A2 -->
            <h3>4. What is the notation for musicians called?</h3>
            <input v-model="answer4" type="radio" name="answer4" id="Notes" value="1">
            <label for="Notes">Notes</label><br>
            <input v-model="answer4" type="radio" name="answer4" id="Staff" value="2">
            <label for="Staff">Staff</label><br>
            <input v-model="answer4" type="radio" name="answer4" id="Clef" value="3">
            <label for="Clef">Clef</label><br>
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
            answerKey: [1, 3, 3, 2],
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