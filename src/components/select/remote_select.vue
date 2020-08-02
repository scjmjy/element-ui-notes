<template>
    <div style="padding: 20px">
        <p>selected: {{ selected }}</p>
        <el-select v-model="selected" placeholder="请输入关键字" :loading="isLoading" filterable remote :remote-method="fetchOptions">
            <el-option v-for="o of remoteOptions" :key="o" :label="o" :value="o"></el-option>
        </el-select>
    </div>
</template>

<script>
const allOptions = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
]
export default {
    name: 'remote-select',
    data() {
        return {
            selected: '',
            isLoading: false,
            remoteOptions: []
        }
    },
    methods: {
        fetchOptions(val) {
            this.isLoading = true
            setTimeout(() => {
                this.remoteOptions = allOptions.filter(o => o.toLowerCase().includes(val.toLowerCase()))
                this.isLoading = false
            }, 500)
        }
    }
}
</script>

<style></style>
