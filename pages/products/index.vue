<template>
    <div>
        Product page -
        <nuxt-link to="/products/add">Add</nuxt-link>

        <table>
            <tr>
                <td>Name</td>+
                <td>Price</td>
                <td>Action</td>
            </tr>
            <tr>
                <td>
                    <nuxt-link to="/products/1">Pepsi(1)</nuxt-link>
                </td>
                <td>10,000</td>
                <td>
                    <nuxt-link to="/products/1/edit">Edit(1)</nuxt-link>
                </td>
            </tr>
            <tr>
                <td>
                    <nuxt-link to="/products/2">Cake(1)</nuxt-link>
                </td>
                <td>100,000</td>
                <td>
                    <nuxt-link to="/products/2/edit">Edit(2)</nuxt-link>
                </td>
            </tr>
        </table>

    </div>
</template>