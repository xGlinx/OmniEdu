import Realm from "realm"

import WorkSchema from "../schemas/WorkSchema";

export default function getRealm () {
    return Realm.open ({
        schema: [WorkSchema],
    })
}

