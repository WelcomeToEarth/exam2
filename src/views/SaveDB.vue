<template>
  <div class="home">
    <pre>
        //dao/BookDao.js v1
        const mongoose = require('mongoose')
        let ablumSchema = new mongoose.Schema({
            data: Array
        })
        let ablumsModel = mongoose.model("ablum", ablumSchema)

        function saveData(list) {
            ablumsModel.insertMany(list, { ordered: true })
                .then()
        }

        module.exports = { saveData }
    </pre>
  </div>
</template>

<script>

export default {
}
</script>
