<template>
    <div class="container">
        <div class="row mt-4">
            <div class="col-12">
                <!-- Log liste yapısı başlangıç -->
                <div class="card border bg-transparent rounded-3">

                    <div class="card-body">

                        <!-- Liste aksiyon bölüm başlangıç -->
                        <div class="row g-3 align-items-center justify-content-between mb-3">
                            <!-- Tablo içi arama -->
                            <div class="col-md-12">
                                <form class="rounded position-relative">
                                    <input class="form-control bg-transparent" type="search" placeholder="Search"
                                        aria-label="Search" v-model="searchQuery">
                                </form>
                            </div>

                        </div>
                        <!-- Liste aksiyon bölüm bitiş -->

                        <!-- Log liste tablo başlangıç -->
                        <div class="table-responsive border-0">
                            <div v-if="loading" class="loading">Looading...</div>
                            <table v-else class="table align-middle p-4 mb-0 table-hover table-shrink">
                                <thead class="table-dark">
                                    <tr>
                                        <th scope="col" class="border-0 rounded-start">Log</th>
                                        <th scope="col" class="border-0">User</th>
                                        <th scope="col" class="border-0">Website</th>
                                        <th scope="col" class="border-0">Status</th>
                                    </tr>
                                </thead>

                                <tbody class="border-top-0">

                                    <tr v-for="(item, index) in filteredUserData" :key="index">
                                        <td>
                                            <h6 class="course-title mt-2 mt-md-0 mb-0"> {{ item.company.catchPhrase }}</h6>
                                        </td>
                                        <td>
                                            <h6 class="mb-0"> {{ item.name }} ({{ item.username }})</h6>
                                        </td>
                                        <td>
                                            {{ item.website }}
                                        </td>

                                        <td>
                                            <span class="badge bg-success bg-opacity-10 text-success mb-2">Live</span>
                                        </td>

                                    </tr>


                                </tbody>
                            </table>
                        </div>
                        <!-- Log liste tablo bitiş -->


                    </div>
                </div>
                <!-- Log liste yapısı bitiş -->
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'Users',
    data() {
        return {
            searchQuery: '' // Kullanıcının arama sorgusu
        };
    },
    computed: {
        ...mapState(['userData']), // Vuex store'daki userData durumu
        loading() {
            return this.userData.length === 0; // Veriler yükleniyorsa true döner
        },
        filteredUserData() {
            if (!this.searchQuery) {
                return this.userData; // Arama sorgusu yoksa tüm verileri döndür
            }
            const query = this.searchQuery.toLowerCase(); // Arama sorgusunu küçük harfe çevir
            return this.userData.filter(item =>
                item.name.toLowerCase().includes(query) || // İsim içeriyorsa veya
                item.username.toLowerCase().includes(query) || // Kullanıcı adı içeriyorsa veya
                item.website.toLowerCase().includes(query) || // Web sitesi içeriyorsa veya
                item.company.catchPhrase.toLowerCase().includes(query) // Log içeririyorsa
            );
        }
    },
    methods: {
        ...mapActions(['fetchuserData']) // Vuex eylemi olan fetchuserData'i haritala
    },
    created() {
        if (this.userData.length === 0) {
            this.fetchuserData(); // Veriler yüklenmemişse fetchuserData'i çağır
        }
    }
};
</script>
<style>
.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    font-size: 20px;
}
</style>