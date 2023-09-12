<template>
    <div>
        <table class="w-full border-4 border-gray-100">
            <thead>
                <tr class="w-full border-b-2 border-gray-100 bg-gray-200">
                    <td class="  w-1/12 py-2 text-center font-serif border-r-2 border-white font-semibold text-lg">ID</td>
                    <td class="  w-2/5 py-2 text-center font-serif border-r-2 border-white font-semibold text-lg">Objet</td>
                    <td class="  w-2/6 py-2 text-center font-serif border-r-2 border-white font-semibold text-lg">N° réference cadastrale</td>
                    <td class="  w-1/5 py-2 text-center font-serif font-semibold text-lg border-r-2 border-white ">Etat</td>
                    <td class="  w-1/5 py-2 text-center font-serif font-semibold text-lg"></td>
                </tr>
            </thead>
            <tbody>
                <tr class="w-full border-b-2 border-gray-100" v-for="column in columns" >
                    <td class="  w-1/12 py-2 text-center border-r-2 border-gray-200">{{ column.id }}</td>
                    <td class="  w-2/5 py-2 text-center border-r-2 border-gray-200">{{ column.objet }}</td>
                    <td class="  w-2/6 py-2 text-center border-r-2 border-gray-200">{{ column.reference }}</td>
                    <td class="  w-1/5 py-2 text-center border-r-2 border-gray-200">{{ column.etat }}</td>

                    <td class="  w-1/5 py-2 text-center ">
                        <div class=" flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                            class="w-6 h-6 cursor-pointer text-gray-700 mx-1 hover:text-yellow-700">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                            class="w-6 h-6 cursor-pointer text-gray-700 mx-1 hover:text-yellow-700" >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
                            </svg>



                        </div>
                    </td>
                </tr>
            </tbody>

        </table>
    </div>
</template>


<script>


export default {
    props: ["columns"],
    setup(props) {

        return {}
    }
}
</script>

<style lang="scss" scoped></style>

