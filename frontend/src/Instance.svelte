<script lang="ts">
    import { List } from "../wailsjs/go/main/App";
    import { limautil } from "../wailsjs/go/models";

    let instance: limautil.InstanceInfo | undefined = undefined;

    List().then((instances) => {
        instance = instances[0];
    });
</script>

{#if instance}
    <table>
        <thead>
            <th>arch</th>
            <th>cpus</th>
            <th>disk</th>
            <th>memory</th>
            <th>name</th>
            <th>runtime</th>
            <th>address</th>
            <th>status</th>
        </thead>
        <tr>
            <td><p>{instance.arch}</p></td>
            <td><p>{instance.cpus}</p></td>
            <td><p>{instance.disk / 1024 / 1024 / 1024}GB</p></td>
            <td><p>{instance.memory / 1024 / 1024 / 1024}GB</p></td>
            <td><p>{instance.name}</p></td>
            <td><p>{instance.runtime}</p></td>
            <td><p>{instance.address}</p></td>
            <td><p>{instance.status}</p></td>
        </tr>
    </table>
{/if}
