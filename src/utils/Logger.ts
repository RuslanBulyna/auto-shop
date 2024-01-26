import { ErrorResponse } from '@/interfaces/ErrorResponse'

type LogType = 'info' | 'warn' | 'error'

interface LogMessage {
    message: string
    data?: ErrorResponse | any
    type?: LogType
}

function log({ message, data, type = 'info' }: LogMessage) {
    switch (type) {
        case 'info':
            console.info(message, data)
            break
        case 'warn':
            console.warn(message, data)
            break
        case 'error':
            console.error(message, formatErrorResponse(data))
            break
    }
}

function formatErrorResponse(data: any): string {
    if (data && typeof data.statusCode === 'number') {
        return `${data.statusCode}: ${
            data.message || 'Unknown error'
        } | Source: ${data.source || 'Unknown'} | Value: ${
            data.sourceValue || 'N/A'
        }`
    }
    return JSON.stringify(data)
}

export function logInfo(message: string, data?: any) {
    log({ message, data, type: 'info' })
}

export function logWarn(message: string, data?: any) {
    log({ message, data, type: 'warn' })
}

export function logError(message: string, data: ErrorResponse | any) {
    log({ message, data, type: 'error' })
}
