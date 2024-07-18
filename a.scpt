-- クリップボードの内容を取得する関数
on getClipboardContent()
    set clipboardContent to ""
    set attempts to 0
    repeat while clipboardContent is "" and attempts is less than 20 -- 最大20回（合計2秒）試行
        try
            set clipboardContent to the clipboard -- クリップボードの内容を取得
        on error
            delay 0.1 -- エラーが発生した場合は短時間待機
        end try
        set attempts to attempts + 1
    end repeat
    return clipboardContent
end getClipboardContent

-- 現在の選択をコピーする
tell application "System Events"
    keystroke "c" using {command down} -- 現在の選択をコピー
end tell

-- クリップボードの内容を取得
set copiedContent to getClipboardContent()

-- コピーした内容を表示（必要に応じてこの行をコメントアウト）
display dialog copiedContent

-- コピーした内容を返す
return copiedContent
