import { expect, it, describe, beforeEach } from "vitest"
import { mount } from "@vue/test-utils"
import { createPinia, setActivePinia } from "pinia"

export default function snapshotTest(component, componentName) {
    describe(componentName, () => {

        beforeEach(() => {
            setActivePinia(createPinia())
        })
        it('Check Snapshot', () => {
            const componentMounted = mount(component)
            expect(componentMounted.html()).toMatchSnapshot()
        })
    })
}