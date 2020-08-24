<template>
        <div id="table">
            <table>
                <tr>
                    <th>نام</th>
                    <th>ایمیل</th>
                </tr>
                <tr>
                    <td>john.doe</td>
                    <td>john.doe@gmail.com</td>
                    <td><button class='danger'>حذف کاربر</button></td>
                </tr>
                <tr>
                    <td>john.doe</td>
                    <td>john.doe@gmail.com</td>
                    <td><button class='danger'>حذف کاربر</button></td>
                </tr>
                <tr>
                    <td>john.doe</td>
                    <td>john.doe@gmail.com</td>
                    <td><button class='danger'>حذف کاربر</button></td>
                </tr>
                <tr>
                    <td>john.doe</td>
                    <td>john.doe@gmail.com</td>
                    <td><button class='danger'>حذف کاربر</button></td>
                </tr>
            </table>
        </div>

</template>


<style scoped>
    tr:nth-child(even){background-color: #dad8d8;}
    #table{
        overflow-x:scroll;
        margin-top:20px;
    }
    table{
        
        width:max-content;
        margin:auto        
    }
    th,td{
        text-align: center;
        padding-top: 12px;
        padding-bottom: 12px;
        border:1px solid rgb(179, 179, 179);
        padding:20px;
        max-width:100%
    }
    th{
        background: #4CAF50;
    }


</style>