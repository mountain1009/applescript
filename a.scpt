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

-- 現在のクリップボードの内容を保存
set initialClipboardContent to getClipboardContent()

-- コピー操作を3回試行する
set copySuccess to false
set newClipboardContent to ""
repeat with attempt from 1 to 3
    tell application "System Events"
        keystroke "c" using {command down} -- 現在の選択をコピー
    end tell
    
    -- コピー操作が完了するまで少し待機
    delay 0.5
    
    -- 新しいクリップボードの内容を取得
    set newClipboardContent to getClipboardContent()
    
    -- コピー操作が成功したか確認
    if newClipboardContent is not equal to initialClipboardContent then
        set copySuccess to true
        exit repeat
    end if
end repeat

if copySuccess then
    display dialog "コピーが成功しました: " & newClipboardContent
    return newClipboardContent
else
    display dialog "コピーに失敗しました。"
    return ""
end if
