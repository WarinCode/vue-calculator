<script setup lang="ts">
import { ref } from "vue";
import CalculatorContainer from './CalculatorContainer.vue';
import Display from "./Display.vue";
import Expression from "./Expression.vue";
import Output from "./Output.vue";
import Keys from "./Keys.vue";
import AllClearKey from "./AllClearKey.vue";
import PercentKey from "./PercentKey.vue";
import DeleteKey from "./DeleteKey.vue";
import DivideKey from "./DivideKey.vue";
import NumberKey from "./NumberKey.vue";
import DecimalKey from "./DecimalKey.vue";
import MultiplyKey from "./MultiplyKey.vue";
import SubtractKey from "./SubtractKey.vue";
import AddKey from "./AddKey.vue";
import EqualsKey from "./EqualsKey.vue";

const expression = ref<string>("");
const output = ref<string>("");
const numbers: number[] = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const symbols: string[] = ["%", "/", "*", "-", "+", "."];

const isEmptyExpression = (): boolean => {
    return expression.value.length === 0;
}

const isInvalidSyntax = (input: string): boolean => {
    if (isEmptyExpression() && symbols.includes(input)) {
        return true;
    }

    const last: string = expression.value[expression.value.length - 1];
    if (symbols.includes(last)) {
        return symbols.includes(input);
    }

    return false;
}

const handleAllClear = (): void => {
    if (expression.value || output.value) {
        expression.value = "";
        output.value = "";
    }
}

const handleDelete = (): void => {
    if (expression.value) {
        if (expression.value.length === 1) {
            expression.value = "";
        } else {
            expression.value = expression.value.slice(0, expression.value.length - 1);
        }

        handlePreCalculate();

        if (expression.value[expression.value.length - 1] === ".") {
            output.value = output.value.slice(0, output.value.length - 1);
        }
    }
}

const handlePreCalculate = (): void => {
    if (expression.value.length === 1) {
        output.value = expression.value;
        return;
    }

    let last: string = expression.value[expression.value.length - 1];
    if (symbols.includes(last)) {
        return;
    }

    try {
        output.value = String(eval(expression.value));

        if (expression.value.length === 0) {
            output.value = "";
        }
    } catch (e: unknown) {
        if (e instanceof SyntaxError) {
            console.error(e.message);
        }
    }
}

const handleCalculate = (): void => {
    if (expression.value.length === 0) {
        return;
    }

    try {
        output.value = String(eval(expression.value));
        expression.value = output.value;
    } catch (e: unknown) {
        if (e instanceof SyntaxError) {
            console.error(e.message);
        }
    }
}
const handleAddToExpression = (input: string | number): void => {
    const temp: string = String(input);

    if (!isInvalidSyntax(temp)) {
        expression.value += temp;
        handlePreCalculate();
    }
}
</script>

<template>
    <CalculatorContainer>
        <Display>
            <Expression :expression="expression" />
            <Output :output="output" />
        </Display>
        <Keys>
            <AllClearKey :handle="handleAllClear" />
            <PercentKey :handle="handleAddToExpression" />
            <DeleteKey :handle="handleDelete" />
            <DivideKey :handle="handleAddToExpression" />
            <NumberKey v-for="number in numbers.slice(0, 3)" :number="number" :handle="handleAddToExpression" />
            <MultiplyKey :handle="handleAddToExpression" />
            <NumberKey v-for="number in numbers.slice(3, 6)" :number="number" :handle="handleAddToExpression" />
            <SubtractKey :handle="handleAddToExpression" />
            <NumberKey v-for="number in numbers.slice(6, 9)" :number="number" :handle="handleAddToExpression" />
            <AddKey :handle="handleAddToExpression" />
            <NumberKey class="col-span-2 w-full" :number="numbers[numbers.length - 1]"
                :handle="handleAddToExpression" />
            <DecimalKey :handle="handleAddToExpression" />
            <EqualsKey :handle="handleCalculate" />
        </Keys>
    </CalculatorContainer>
</template>
